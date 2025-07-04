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

export type StorySection = FullBleedImageSection | SplitLayoutSection | TextOnlySection | SideBySideImagesSection | FullBleedVideoSection;

export interface Project {
  id: string;
  title: string;
  client: string;
  coverImage: string;
  summary: string;
  story: StorySection[];
}