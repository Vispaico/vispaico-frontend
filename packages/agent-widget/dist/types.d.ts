export interface AgentCitation {
    document_title: string;
    document_url: string;
    section_title: string;
}
export interface AgentAction {
    type: string;
    label: string;
    url: string;
}
export interface AgentChatResponse {
    answer: string;
    citations: AgentCitation[];
    actions: AgentAction[];
    contexts_used: number;
}
export interface ChatMessage {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    citations?: AgentCitation[];
    actions?: AgentAction[];
}
export interface AgentWidgetTheme {
    bg?: string;
    surface?: string;
    surface2?: string;
    border?: string;
    text?: string;
    textMuted?: string;
    buttonBg?: string;
    buttonText?: string;
    radius?: string;
    shadow?: string;
}
export interface AgentWidgetProps {
    apiBaseUrl: string;
    workspaceId: string;
    brandName?: string;
    title?: string;
    subtitle?: string;
    suggestedPrompts?: string[];
    theme?: AgentWidgetTheme;
    position?: 'bottom-right' | 'bottom-left';
    onActionClick?: (action: AgentAction) => void;
}
//# sourceMappingURL=types.d.ts.map