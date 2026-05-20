import type { ReactNode } from 'react';
import { cn } from '../lib/cn';
import styles from './chat-panel.module.css';

interface ChatPanelProps {
  isOpen: boolean;
  position: 'bottom-right' | 'bottom-left';
  title: string;
  subtitle: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
  empty?: boolean;
}

export function ChatPanel({
  isOpen,
  position,
  title,
  subtitle,
  onClose,
  children,
  footer,
  empty,
}: ChatPanelProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div
        className={cn(styles.panel, position === 'bottom-left' && styles.panelBottomLeft)}
        role="dialog"
        aria-label={title}
      >
        <div className={styles.header}>
          <div className={styles.headerInfo}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close chat" type="button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className={cn(styles.body, empty && styles.bodyEmpty)}>
          {children}
        </div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </>
  );
}
