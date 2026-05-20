import { cn } from '../lib/cn';
import styles from './chat-launcher.module.css';

interface ChatLauncherProps {
  isOpen: boolean;
  position: 'bottom-right' | 'bottom-left';
  onClick: () => void;
}

export function ChatLauncher({ isOpen, position, onClick }: ChatLauncherProps) {
  return (
    <button
      className={cn(
        styles.launcher,
        position === 'bottom-left' && styles.launcherBottomLeft,
        isOpen && styles.launcherHidden
      )}
      onClick={onClick}
      aria-label="Open chat"
      type="button"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </button>
  );
}
