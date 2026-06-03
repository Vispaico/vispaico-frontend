'use client';

import { AgentWidget } from '@vispaico/agent-widget';

export function SiteAgentWidget() {
  return (
    <AgentWidget
      apiBaseUrl={process.env.NEXT_PUBLIC_AGENT_API_BASE_URL!}
      workspaceId={process.env.NEXT_PUBLIC_VISPAICO_WORKSPACE_ID!}
      brandName="Vispaico"
      title="Vispaico Assistant"
      subtitle="Your AIOS assistant"
      suggestedPrompts={[
        'What is AIOS?',
        'What\u2019s the difference between Company Brain and Company Analyst?',
        'Where should we start with AI in our company?',
        'How much does AIOS cost?',
      ]}
    />
  );
}
