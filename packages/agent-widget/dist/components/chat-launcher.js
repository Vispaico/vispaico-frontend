import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../lib/cn';
import styles from './chat-launcher.module.css';
export function ChatLauncher({ isOpen, position, onClick }) {
    return (_jsx("button", { className: cn(styles.launcher, position === 'bottom-left' && styles.launcherBottomLeft, isOpen && styles.launcherHidden), onClick: onClick, "aria-label": "Open chat", type: "button", children: _jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) }) }));
}
//# sourceMappingURL=chat-launcher.js.map