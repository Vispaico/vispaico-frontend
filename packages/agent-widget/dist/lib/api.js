export async function sendMessage(apiBaseUrl, workspaceId, message, signal) {
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
    const data = await response.json();
    if (!data || typeof data !== 'object') {
        throw new Error('Invalid response from agent API');
    }
    const d = data;
    if (typeof d.answer !== 'string') {
        throw new Error('Agent response missing "answer" field');
    }
    return {
        answer: d.answer,
        citations: Array.isArray(d.citations) ? d.citations : [],
        actions: Array.isArray(d.actions) ? d.actions : [],
        contexts_used: typeof d.contexts_used === 'number' ? d.contexts_used : 0,
    };
}
//# sourceMappingURL=api.js.map