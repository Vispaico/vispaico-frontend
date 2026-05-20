import type { AgentCitation } from '../types';
import styles from './citation-list.module.css';

interface CitationListProps {
  citations: AgentCitation[];
}

export function CitationList({ citations }: CitationListProps) {
  return (
    <ul className={styles.list}>
      {citations.map((citation, i) => (
        <li key={i}>
          <a
            className={styles.link}
            href={citation.document_url}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            {citation.section_title || citation.document_title}
          </a>
        </li>
      ))}
    </ul>
  );
}
