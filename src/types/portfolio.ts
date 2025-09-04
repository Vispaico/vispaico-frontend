// --- A 'Scene' can be one of the following specific shapes ---
export interface FullBleedImageSection {
  type: 'fullBleedImage';
  imageSrc: string;
  headline: string;
}

export interface SplitLayoutSection {
  type: 'splitLayout';
  imageSrc: string;
  text: string;
}

export interface TextOnlySection {
  type: 'textOnly';
  headline: string;
  text: string;
}

export interface SideBySideImagesSection {
  type: 'sideBySideImages';
  imageLeft: string;
  textLeft: string;
  imageRight: string;
  textRight: string;
}

export interface FullBleedVideoSection {
  type: 'fullBleedVideo';
  videoSrc: string;
  headline: string;
}

// --- A StorySection is a union of all possible scene types ---
export type StorySection = 
  | FullBleedImageSection 
  | SplitLayoutSection 
  | TextOnlySection 
  | SideBySideImagesSection 
  | FullBleedVideoSection;

// --- The main Project object type ---
export interface Project {
  id: string;
  title: string;
  client: string;
  coverImage: string;
  summary: string;
  stickerText?: string; // Optional sticker text
  videoUrl?: string; // Optional video URL for hover previews
  story: StorySection[];
}