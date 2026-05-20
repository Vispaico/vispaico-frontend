import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../lib/cn';
import styles from './action-buttons.module.css';
export function ActionButtons({ actions, onActionClick }) {
    return (_jsx("div", { className: styles.list, children: actions.map((action, i) => {
            const isPrimary = i === 0;
            return (_jsx("a", { href: action.url, className: cn(styles.actionBtn, isPrimary ? styles.primary : styles.secondary), onClick: (e) => {
                    if (onActionClick) {
                        e.preventDefault();
                        onActionClick(action);
                    }
                }, children: action.label }, i));
        }) }));
}
//# sourceMappingURL=action-buttons.js.map