# Domain docs

This repo uses a **single-context** layout.

## Files

- `CONTEXT.md` — domain glossary, terminology, and conventions (repo root)
- `docs/adr/` — architectural decision records

## Consumer rules

When a skill reads `CONTEXT.md`:

- Prefer the vocabulary in `CONTEXT.md` over generic terms. If `CONTEXT.md` defines "Launch," refer to "the Launch module," not "the startup flow" or "the GrowthWebsite component."
- If a term appears in `CONTEXT.md` but feels fuzzy, sharpen it in-place during the conversation.
- If a concept your refactor names doesn't exist in `CONTEXT.md`, add it.

When a skill reads `docs/adr/`:

- Do not re-litigate decisions recorded there unless the friction is real enough to warrant reopening the ADR.
- If you recommend something that contradicts an ADR, flag it explicitly.
