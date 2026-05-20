import type { AgentAction } from '../types';
import { cn } from '../lib/cn';
import styles from './action-buttons.module.css';

interface ActionButtonsProps {
  actions: AgentAction[];
  onActionClick?: (action: AgentAction) => void;
}

export function ActionButtons({ actions, onActionClick }: ActionButtonsProps) {
  return (
    <div className={styles.list}>
      {actions.map((action, i) => {
        const isPrimary = i === 0;
        return (
          <a
            key={i}
            href={action.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(styles.actionBtn, isPrimary ? styles.primary : styles.secondary)}
            onClick={(e) => {
              if (onActionClick) {
                e.preventDefault();
                onActionClick(action);
              }
            }}
          >
            {action.label}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
        );
      })}
    </div>
  );
}
