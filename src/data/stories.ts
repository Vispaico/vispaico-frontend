export type StorySummary = {
  routeSegment: string;
  title: string;
  excerpt: string;
  publishDate: string;
  readLength: string;
  metadataTitle: string;
  metadataDescription: string;
  featured?: boolean;
};

export const storySummaries: StorySummary[] = [
  {
    routeSegment: 'ai-adopters-hire-more',
    title: 'The Startup Scene is Actually Pretty Lit Right Now (And We Have the Data to Prove It)',
    excerpt:
      "Look, we get it. The economy's been giving everyone anxiety lately, and if you're building a business, it probably feels like you're trying to surf in a hurricane sometimes. But here's the thing – Mercury just dropped some seriously interesting data that might make you feel a whole lot better about where things are heading.",
    publishDate: '2025-10-07',
    readLength: '3 minute read',
    metadataTitle: 'Heavy AI adopters are hiring MORE because of AI tools',
    metadataDescription:
      "Wasn't AI supposed to replace everyone? Nope. These companies are using AI to get more done, then hiring more people to handle the extra business.",
    featured: true,
  },
  {
    routeSegment: 'human-centered-websites',
    title: 'Designing Human-Centered Websites That Convert',
    excerpt:
      'A practical look at turning qualitative customer insights into high-performing digital experiences that feel effortless for the user.',
    publishDate: '2025-10-06',
    readLength: '3 minute read',
    metadataTitle: 'Designing Human-Centered Websites That Convert',
    metadataDescription:
      'Discover how user conversations, lightweight prototypes, and iterative testing align teams around a website experience that converts.',
  },
  {
    routeSegment: 'ai-assisted-content-workflows',
    title: 'Building AI-Assisted Content Workflows for Lean Teams',
    excerpt:
      'How small marketing teams can blend human editorial judgment with AI systems to publish faster without sacrificing voice or quality.',
    publishDate: '2024-09-12',
    readLength: '8 minute read',
    metadataTitle: 'Building AI-Assisted Content Workflows for Lean Teams',
    metadataDescription:
      'Step-by-step guidance for introducing AI into an editorial workflow, from ideation to distribution.',
  },
];

export const storyLookup = storySummaries.reduce<Record<string, StorySummary>>((accumulator, story) => {
  accumulator[story.routeSegment] = story;
  return accumulator;
}, {});

export const storiesBasePath = '/subdomains/stories';
