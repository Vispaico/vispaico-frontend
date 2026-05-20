'use client';

import { AgentWidget } from '@vispaico/agent-widget';

export function SiteAgentWidget() {
  return (
    <AgentWidget
      apiBaseUrl={process.env.NEXT_PUBLIC_AGENT_API_BASE_URL!}
      workspaceId={process.env.NEXT_PUBLIC_VISPAICO_WORKSPACE_ID!}
      brandName="Vispaico"
      title="Vispaico Assistant"
      subtitle="How can I help you?"
      suggestedPrompts={[
        'What do I own at the end of the Launch Program?',
        'Which page should I read if I want pricing and what is included?',
        'I want to talk to someone about my project.',
      ]}
    />
  );
}
