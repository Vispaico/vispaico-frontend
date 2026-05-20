import type { ChatMessage } from '../types';
import { cn } from '../lib/cn';
import { CitationList } from './citation-list';
import { ActionButtons } from './action-buttons';
import styles from './message-item.module.css';

interface MessageItemProps {
  message: ChatMessage;
}

export function MessageItem({ message }: MessageItemProps) {
  const isUser = message.role === 'user';

  return (
    <div className={cn(styles.row, isUser ? styles.userRow : styles.assistantRow)}>
      <div className={cn(styles.bubble, isUser ? styles.userBubble : styles.assistantBubble)}>
        <p className={styles.answer}>{message.content}</p>
        {!isUser && message.citations && message.citations.length > 0 && (
          <div className={styles.citations}>
            <CitationList citations={message.citations} />
          </div>
        )}
        {!isUser && message.actions && message.actions.length > 0 && (
          <div className={styles.actions}>
            <ActionButtons actions={message.actions} />
          </div>
        )}
      </div>
    </div>
  );
}
