import type { ReactNode } from 'react';
interface ChatPanelProps {
    isOpen: boolean;
    position: 'bottom-right' | 'bottom-left';
    title: string;
    subtitle: string;
    onClose: () => void;
    children: ReactNode;
    footer?: ReactNode;
    empty?: boolean;
}
export declare function ChatPanel({ isOpen, position, title, subtitle, onClose, children, footer, empty, }: ChatPanelProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=chat-panel.d.ts.map