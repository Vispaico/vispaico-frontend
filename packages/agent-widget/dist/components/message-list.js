import { jsx as _jsx } from "react/jsx-runtime";
import { MessageItem } from './message-item';
import styles from './message-list.module.css';
export function MessageList({ messages }) {
    return (_jsx("div", { className: styles.list, children: messages.map((msg) => (_jsx(MessageItem, { message: msg }, msg.id))) }));
}
//# sourceMappingURL=message-list.js.map