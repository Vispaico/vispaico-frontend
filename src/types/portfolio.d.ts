// This defines the structure of each project for TypeScript
export interface StorySection {
  type: 'fullBleedImage' | 'splitLayout' | 'textOnly' | 'sideBySideImages' | 'fullBleedVideo';
  imageSrc?: string;
  headline?: string;
  text?: string;
  imageLeft?: string;
  textLeft?: string;
  imageRight?: string;
  textRight?: string;
  videoSrc?: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  coverImage: string;
  summary: string;
  story: StorySection[];
}