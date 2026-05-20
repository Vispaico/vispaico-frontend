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
            className={cn(styles.actionBtn, isPrimary ? styles.primary : styles.secondary)}
            onClick={(e) => {
              if (onActionClick) {
                e.preventDefault();
                onActionClick(action);
              }
            }}
          >
            {action.label}
          </a>
        );
      })}
    </div>
  );
}
