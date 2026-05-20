import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from 'react';
import styles from './composer.module.css';
export function Composer({ onSend, disabled }) {
    const [value, setValue] = useState('');
    const inputRef = useRef(null);
    const handleSend = () => {
        const trimmed = value.trim();
        if (!trimmed || disabled)
            return;
        onSend(trimmed);
        setValue('');
        inputRef.current?.focus();
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    return (_jsxs("div", { className: styles.wrapper, children: [_jsx("input", { ref: inputRef, className: styles.input, type: "text", value: value, onChange: (e) => setValue(e.target.value), onKeyDown: handleKeyDown, placeholder: "Ask a question...", disabled: disabled, "aria-label": "Message input" }), _jsx("button", { className: styles.sendBtn, onClick: handleSend, disabled: disabled || !value.trim(), "aria-label": "Send message", type: "button", children: disabled ? (_jsx("svg", { className: styles.spinner, width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: _jsx("circle", { cx: "12", cy: "12", r: "10", strokeDasharray: "31.4 31.4", strokeLinecap: "round" }) })) : (_jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("line", { x1: "22", y1: "2", x2: "11", y2: "13" }), _jsx("polygon", { points: "22 2 15 22 11 13 2 9 22 2" })] })) })] }));
}
//# sourceMappingURL=composer.js.map