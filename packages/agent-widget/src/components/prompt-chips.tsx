import styles from './prompt-chips.module.css';

interface PromptChipsProps {
  prompts: string[];
  onSelect: (prompt: string) => void;
}

export function PromptChips({ prompts, onSelect }: PromptChipsProps) {
  return (
    <div className={styles.chips}>
      {prompts.map((prompt) => (
        <button
          key={prompt}
          className={styles.chip}
          onClick={() => onSelect(prompt)}
          type="button"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}
