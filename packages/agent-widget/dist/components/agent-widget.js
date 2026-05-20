import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback, useRef, useEffect } from 'react';
import { sendMessage } from '../lib/api';
import { ChatLauncher } from './chat-launcher';
import { ChatPanel } from './chat-panel';
import { MessageList } from './message-list';
import { PromptChips } from './prompt-chips';
import { Composer } from './composer';
const STORAGE_KEY = '__vispaico_chat_state';
function loadState() {
    if (typeof window === 'undefined')
        return null;
    try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        if (!raw)
            return null;
        return JSON.parse(raw);
    }
    catch {
        return null;
    }
}
function saveState(messages, isOpen, isDesktop) {
    if (typeof window === 'undefined')
        return;
    try {
        // On desktop persist open/closed so the panel stays open across navigations.
        // On mobile only persist messages — the panel resets to closed on navigation.
        const data = { messages };
        if (isDesktop)
            data.desktopOpen = isOpen;
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
    catch {
        // storage full or unavailable — ignore
    }
}
let msgIdCounter = 0;
function nextId() {
    msgIdCounter += 1;
    return `msg-${msgIdCounter}`;
}
export function AgentWidget({ apiBaseUrl, workspaceId, brandName, title = 'Vispaico', subtitle = 'Ask me anything about Vispaico', suggestedPrompts = [], theme, position = 'bottom-right', onActionClick, }) {
    const [isDesktop, setIsDesktop] = useState(false);
    const saved = loadState();
    const [isOpen, setIsOpen] = useState(saved?.desktopOpen ?? false);
    const [messages, setMessages] = useState(saved?.messages ?? []);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const abortRef = useRef(null);
    useEffect(() => {
        setIsDesktop(window.innerWidth > 768);
    }, []);
    const handleOpen = useCallback(() => setIsOpen(true), []);
    const handleClose = useCallback(() => setIsOpen(false), []);
    const handleSend = useCallback(async (text) => {
        const userMsg = {
            id: nextId(),
            role: 'user',
            content: text,
        };
        setMessages((prev) => [...prev, userMsg]);
        setLoading(true);
        setError(null);
        if (abortRef.current) {
            abortRef.current.abort();
        }
        const controller = new AbortController();
        abortRef.current = controller;
        try {
            const data = await sendMessage(apiBaseUrl, workspaceId, text, controller.signal);
            const assistantMsg = {
                id: nextId(),
                role: 'assistant',
                content: data.answer,
                citations: data.citations,
                actions: data.actions,
            };
            setMessages((prev) => [...prev, assistantMsg]);
        }
        catch (err) {
            if (err instanceof DOMException && err.name === 'AbortError')
                return;
            const rawMessage = err instanceof Error ? err.message : 'Something went wrong';
            // Replace cryptic fetch errors with a user-friendly message
            const friendlyMessage = rawMessage === 'Failed to fetch' || err instanceof TypeError
                ? 'Could not reach the agent API. Check API URL or CORS configuration.'
                : rawMessage;
            setError(friendlyMessage);
        }
        finally {
            setLoading(false);
        }
    }, [apiBaseUrl, workspaceId]);
    const handlePromptSelect = useCallback((prompt) => {
        if (!loading)
            handleSend(prompt);
    }, [handleSend, loading]);
    const empty = messages.length === 0 && !loading && !error;
    // Persist chat state to sessionStorage on every change so it survives navigations.
    useEffect(() => {
        saveState(messages, isOpen, isDesktop);
    }, [messages, isOpen, isDesktop]);
    return (_jsxs(_Fragment, { children: [_jsx(ChatLauncher, { isOpen: isOpen, position: position, onClick: handleOpen }), _jsxs(ChatPanel, { isOpen: isOpen, position: position, title: title, subtitle: subtitle, onClose: handleClose, footer: _jsx(Composer, { onSend: handleSend, disabled: loading }), empty: empty, children: [empty && (_jsxs(_Fragment, { children: [_jsx("div", { className: "widget-empty-icon", children: brandName ? brandName.charAt(0) : 'V' }), _jsx("p", { className: "widget-empty-title", children: title }), _jsx("p", { className: "widget-empty-text", children: subtitle }), suggestedPrompts.length > 0 && (_jsx(PromptChips, { prompts: suggestedPrompts, onSelect: handlePromptSelect }))] })), messages.length > 0 && _jsx(MessageList, { messages: messages }), error && (_jsx("p", { style: { color: 'var(--widget-text-muted)', fontSize: 13, textAlign: 'center', padding: '12px 0' }, children: error }))] })] }));
}
//# sourceMappingURL=agent-widget.js.map