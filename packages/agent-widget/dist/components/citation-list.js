import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './citation-list.module.css';
export function CitationList({ citations }) {
    return (_jsx("ul", { className: styles.list, children: citations.map((citation, i) => (_jsx("li", { children: _jsxs("a", { className: styles.link, href: citation.document_url, children: [_jsxs("svg", { width: "10", height: "10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }), _jsx("polyline", { points: "15 3 21 3 21 9" }), _jsx("line", { x1: "10", y1: "14", x2: "21", y2: "3" })] }), citation.section_title || citation.document_title] }) }, i))) }));
}
//# sourceMappingURL=citation-list.js.map