import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { cn } from '../lib/cn';
import styles from './chat-panel.module.css';
export function ChatPanel({ isOpen, position, title, subtitle, onClose, children, footer, empty, }) {
    if (!isOpen)
        return null;
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: styles.overlay, onClick: onClose }), _jsxs("div", { className: cn(styles.panel, position === 'bottom-left' && styles.panelBottomLeft), role: "dialog", "aria-label": title, children: [_jsxs("div", { className: styles.header, children: [_jsxs("div", { className: styles.headerInfo, children: [_jsx("h2", { className: styles.title, children: title }), subtitle && _jsx("p", { className: styles.subtitle, children: subtitle })] }), _jsx("button", { className: styles.closeBtn, onClick: onClose, "aria-label": "Close chat", type: "button", children: _jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }) })] }), _jsx("div", { className: cn(styles.body, empty && styles.bodyEmpty), children: children }), footer && _jsx("div", { className: styles.footer, children: footer })] })] }));
}
//# sourceMappingURL=chat-panel.js.map