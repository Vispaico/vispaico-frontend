import type { AgentChatResponse } from '../types';

export async function sendMessage(
  apiBaseUrl: string,
  workspaceId: string,
  message: string,
  signal?: AbortSignal
): Promise<AgentChatResponse> {
  const url = `${apiBaseUrl.replace(/\/+$/, '')}/workspaces/${encodeURIComponent(workspaceId)}/agent/chat`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
    signal,
  });

  if (!response.ok) {
    const text = await response.text().catch(() => 'Unknown error');
    throw new Error(`Agent API error (${response.status}): ${text}`);
  }

  const data: unknown = await response.json();

  if (!data || typeof data !== 'object') {
    throw new Error('Invalid response from agent API');
  }

  const d = data as Record<string, unknown>;

  if (typeof d.answer !== 'string') {
    throw new Error('Agent response missing "answer" field');
  }

  return {
    answer: d.answer,
    citations: Array.isArray(d.citations) ? d.citations as AgentChatResponse['citations'] : [],
    actions: Array.isArray(d.actions) ? d.actions as AgentChatResponse['actions'] : [],
    contexts_used: typeof d.contexts_used === 'number' ? d.contexts_used : 0,
  };
}
