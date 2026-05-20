import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../lib/cn';
import { CitationList } from './citation-list';
import { ActionButtons } from './action-buttons';
import styles from './message-item.module.css';
export function MessageItem({ message }) {
    const isUser = message.role === 'user';
    return (_jsx("div", { className: cn(styles.row, isUser ? styles.userRow : styles.assistantRow), children: _jsxs("div", { className: cn(styles.bubble, isUser ? styles.userBubble : styles.assistantBubble), children: [_jsx("p", { className: styles.answer, children: message.content }), !isUser && message.citations && message.citations.length > 0 && (_jsx("div", { className: styles.citations, children: _jsx(CitationList, { citations: message.citations }) })), !isUser && message.actions && message.actions.length > 0 && (_jsx("div", { className: styles.actions, children: _jsx(ActionButtons, { actions: message.actions }) }))] }) }));
}
//# sourceMappingURL=message-item.js.map