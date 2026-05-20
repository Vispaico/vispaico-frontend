import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../lib/cn';
import styles from './action-buttons.module.css';
export function ActionButtons({ actions, onActionClick }) {
    return (_jsx("div", { className: styles.list, children: actions.map((action, i) => {
            const isPrimary = i === 0;
            return (_jsxs("a", { href: action.url, target: "_blank", rel: "noopener noreferrer", className: cn(styles.actionBtn, isPrimary ? styles.primary : styles.secondary), onClick: (e) => {
                    if (onActionClick) {
                        e.preventDefault();
                        onActionClick(action);
                    }
                }, children: [action.label, _jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("path", { d: "M7 17l9.2-9.2M17 17V7H7" }) })] }, i));
        }) }));
}
//# sourceMappingURL=action-buttons.js.map