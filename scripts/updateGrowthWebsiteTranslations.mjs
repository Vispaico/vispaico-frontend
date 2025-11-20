import fs from 'fs';
import path from 'path';

const projectRoot = path.resolve(process.cwd());
const messagesDir = path.join(projectRoot, 'messages');

const locales = ['en', 'de', 'es', 'vi'];

const homeServicesBase = {
  heading: 'What We Ship',
  subheading: 'One flagship service that stacks strategy, execution, and measurable results.',
  services: [
    {
      id: 'growth-website',
      slug: 'vispaico-growth-website',
      title: 'Vispaico Growth Website',
      description: 'Launch-ready, conversion-first website delivered in 72 hours with messaging, design, automations, and handover.',
      iconClass: 'fa-solid fa-code'
    }
  ]
};

const kickoffServiceNames = {
  'vispaico-growth-website': 'Vispaico Growth Website'
};

const webDesignBase = {
  metadata: {
    title: 'Vispaico Growth Website | $899 | Launch in 72 Hours',
    description: 'Ship a conversion-ready website in 3 days. Strategy, copy, design, development, automations, and launch support included.'
  },
  hero: {
    title: 'Vispaico Growth Website',
    description: 'One sprint, one price. We position your offer, design the experience, wire in automations, and ship your launch.',
    cta: 'See the full breakdown'
  },
  cards: [
    {
      title: 'Vispaico Growth Website',
      summary: '3-day build with strategy, conversion copy, custom design, and launch handover. Perfect for founders who want results fast.',
      link: '/vispaico-growth-website',
      icon: 'star'
    }
  ],
  decisionHelper: {
    title: 'Is the Growth Website right for you?',
    subtitle: 'Use it if you need a high-performing site without agency overhead or months of meetings.',
    cta: 'Explore the offer',
    questions: [
      {
        question: 'Need to relaunch or upgrade fast?',
        answer: 'We plan, write, design, and build in 72 hours.',
        link: '/vispaico-growth-website'
      },
      {
        question: 'Selling a high-ticket service or product?',
        answer: 'We craft the narrative and flows that convert visitors into booked calls or checkouts.',
        link: '/vispaico-growth-website'
      },
      {
        question: 'Want the tech handled for you?',
        answer: 'Domain, hosting, analytics, automations, and integrations are configured before we hand over.',
        link: '/vispaico-growth-website'
      }
    ]
  },
  comparison: {
    title: 'Why teams choose Vispaico over the usual paths',
    table: {
      headers: ['Option', 'Price', 'Timeline', 'What you get', 'Best for', 'Highlights'],
      services: [
        {
          name: 'Vispaico Growth Website',
          price: '$899',
          time: '3 days',
          pages: 'Strategy, copy, design, build, launch support',
          bestFor: 'Founders and operators who need results now',
          includes: [
            'Done-for-you positioning & conversion copy',
            'Custom React site with CMS setup',
            'Domain, hosting, analytics, automations wired in'
          ]
        },
        {
          name: 'Traditional agency',
          price: '$5k - $15k',
          time: '6-12 weeks',
          pages: 'Multiple rounds, meetings, handoffs',
          bestFor: 'Enterprises with big budgets & long timelines',
          includes: [
            'High overhead retainers',
            'Lengthy approvals',
            'Scope creep & delays'
          ]
        },
        {
          name: 'DIY site builders',
          price: '$49/mo + your time',
          time: '2-6 weeks of nights & weekends',
          pages: 'You write, design, and configure everything',
          bestFor: 'Hobby projects or MVP experiments',
          includes: [
            'Generic templates',
            'Manual integrations',
            'Maintenance on you'
          ]
        }
      ]
    }
  }
};

const replacements = [
  ['vispaico-three-day-business-website', 'vispaico-growth-website'],
  ['/vispaico-three-day-business-website', '/vispaico-growth-website'],
  ['Vispaico Three Day Business Website', 'Vispaico Growth Website'],
  ['Vispaico 3-Day Business Website', 'Vispaico Growth Website'],
  ['3-Day Business Website', 'Vispaico Growth Website'],
  ['3 day Business Website', 'Vispaico Growth Website'],
  ['Three Day Business Website', 'Vispaico Growth Website']
];

const applyStringReplacements = (value) => {
  let result = value;
  for (const [from, to] of replacements) {
    result = result.split(from).join(to);
  }
  return result;
};

const walk = (node) => {
  if (typeof node === 'string') {
    return applyStringReplacements(node);
  }
  if (Array.isArray(node)) {
    return node.map((item) => walk(item));
  }
  if (node && typeof node === 'object') {
    for (const key of Object.keys(node)) {
      node[key] = walk(node[key]);
    }
    return node;
  }
  return node;
};

for (const locale of locales) {
  const filePath = path.join(messagesDir, `${locale}.json`);
  const contents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(contents);

  const localeHomeServices = {
    heading: locale === 'en' ? homeServicesBase.heading : data.HomeServices?.heading ?? homeServicesBase.heading,
    subheading: locale === 'en' ? homeServicesBase.subheading : data.HomeServices?.subheading ?? homeServicesBase.subheading,
    services: homeServicesBase.services
  };

  if (data.FastTrack) {
    delete data.FastTrack;
  }
  data.HomeServices = localeHomeServices;
  if (!data.KickoffForm) {
    data.KickoffForm = {};
  }
  data.KickoffForm.serviceNames = kickoffServiceNames;

  if (!data.Services) {
    data.Services = {};
  }

  if (data.Services.ThreeDayWebsite && !data.Services.GrowthWebsite) {
    data.Services.GrowthWebsite = data.Services.ThreeDayWebsite;
    delete data.Services.ThreeDayWebsite;
  }

  data.Services.WebDesign = webDesignBase;

  const growthNamespace = data.Services.GrowthWebsite ?? {};
  if (locale === 'en') {
    growthNamespace.metadata = {
      ...(growthNamespace.metadata ?? {}),
      title: 'Vispaico Growth Website | $899 | Launch in 72 Hours',
      description: 'Launch-ready, conversion-focused website built in 3 days with strategy, copy, design, development, and automations included.'
    };
    if (growthNamespace.hero) {
      growthNamespace.hero.title = 'Vispaico Growth Website';
      growthNamespace.hero.paragraphs = (growthNamespace.hero.paragraphs ?? []).map(applyStringReplacements);
    }
  }
  data.Services.GrowthWebsite = growthNamespace;

  walk(data);

  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);
}

console.log('Updated translation files for Vispaico Growth Website.');
