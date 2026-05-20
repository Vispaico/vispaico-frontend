import { jsx as _jsx } from "react/jsx-runtime";
import styles from './prompt-chips.module.css';
export function PromptChips({ prompts, onSelect }) {
    return (_jsx("div", { className: styles.chips, children: prompts.map((prompt) => (_jsx("button", { className: styles.chip, onClick: () => onSelect(prompt), type: "button", children: prompt }, prompt))) }));
}
//# sourceMappingURL=prompt-chips.js.map