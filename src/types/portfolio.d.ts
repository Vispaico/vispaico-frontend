// This interface defines the shape of a single block inside the rich content array.
// It is the "blueprint" that TypeScript uses.
interface ContentBlock {
  type: 'heading' | 'paragraph' | 'list';
  text?: string;
  items?: string[];
}

// This is the main definition for a section in your story.
// The `content?: ContentBlock[]` is the key part we added.
export interface StorySection {
  type: 'fullBleedImage' | 'splitLayout' | 'textOnly' | 'sideBySideImages' | 'fullBleedVideo';
  imageSrc?: string;
  headline?: string;
  text?: string; // Kept for backward compatibility
  imageLeft?: string;
  textLeft?: string;
  imageRight?: string;
  textRight?: string;
  videoSrc?: string;
  content?: ContentBlock[]; 
}

// This is the main definition for an entire project.
export interface Project {
  id: string;
  title: string;
  client: string;
  coverImage: string;
  summary: string;
  story: StorySection[];
}