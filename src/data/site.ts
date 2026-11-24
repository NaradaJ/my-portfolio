// Single source of truth for profile facts. Used by pages, JSON-LD and llms.txt.
export const profile = {
  name: 'Narada Kasun',
  title: 'Narada Kasun — Web Publisher, QA & Developer',
  description:
    'Web Publisher at Acuity Knowledge Partners and BIT undergraduate at the University of Moratuwa. I keep websites accurate, accessible and launch-ready, and build software in C# and Python.',
  jobTitle: 'Web Publisher',
  employer: { name: 'Acuity Knowledge Partners', url: 'https://www.acuitykp.com' },
  location: { city: 'Colombo', country: 'LK', label: 'Colombo, Sri Lanka' },
  education: [
    { name: 'University of Moratuwa', detail: 'Bachelor of Information Technology (in progress)' },
    { name: 'University of Sri Jayewardenepura', detail: 'BSc in Physical Sciences, 2016–2019' },
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/narada-kasun-27a407327',
    github: 'https://github.com/NaradaJ',
  },
  knowsAbout: [
    'Web publishing',
    'Content management systems',
    'Sitecore',
    'WordPress',
    'Website QA',
    'Web accessibility (WCAG)',
    'SEO',
    'Siteimprove',
    'C#',
    '.NET',
    'Python',
    'MariaDB',
    'JavaScript',
  ],
  tools: [
    'Sitecore',
    'WordPress',
    'Beaver Builder',
    'Siteimprove',
    'Smartling',
    'Adobe Workfront',
    'C# / .NET',
    'Python',
    'MariaDB',
    'JavaScript',
    'Figma',
    'Accessibility',
  ],
};

export const journey = [
  { when: '2016 – 2019', title: 'Science', desc: 'BSc in Physical Sciences, University of Sri Jayewardenepura.' },
  { when: '2021 – 2023', title: 'Teaching', desc: 'Chemistry tutor, breaking hard topics into simple steps.' },
  { when: '2024 – 2025', title: 'The web', desc: 'Sitecore content editor and technical associate at BISTEC Global; operations at Cut+Dry.' },
  { when: '2025 – now', title: 'Web Publisher', desc: 'Acuity Knowledge Partners: CMS, QA, SEO and accessibility for global clients.' },
  { when: '2026 – now', title: 'Code', desc: 'BIT at the University of Moratuwa. C#, Python and real projects like GSTS.' },
];

export const faq = [
  {
    q: 'What does Narada Kasun do?',
    a: 'Narada is a Web Publisher at Acuity Knowledge Partners in Colombo, Sri Lanka. He publishes and quality-checks websites for global clients, covering CMS work, SEO, accessibility and brand consistency, and builds software in C# and Python.',
  },
  {
    q: 'Which tools and technologies does he use?',
    a: 'Sitecore, WordPress, Beaver Builder, Siteimprove, Smartling and Adobe Workfront for web publishing; C#/.NET, Python, MariaDB and JavaScript for development.',
  },
  {
    q: 'How can I contact Narada?',
    a: 'The quickest way is a message on LinkedIn. His code is on GitHub at github.com/NaradaJ.',
  },
];

/** Prefix an internal path with the configured base path. */
export function href(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
