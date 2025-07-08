// src/app/_subdomains/stories/layout.tsx
// You could create a specific <BlogNav /> component for this
// import { BlogNav } from '@/components/BlogNav'; 

export default function StoriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* <BlogNav /> */}
      <article>{children}</article>
    </div>
  );
}