export interface Article {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  date: string;
  authorName: string;
  authorAvatar: string;
  image: string;
}

export const articles: Article[] = [
  {
    slug: 'byte-operator-wins-4-australian-web-awards-including-best-in-show-design',
    title: 'Byte Operator wins 4 Australian Web Awards, including Best in Show: Design',
    category: 'Awards',
    readTime: '3 min read',
    excerpt:
      "We're proud to share that Byte Operator took home four awards at this year's Australian Web Awards, including one of the night's highest honours: Best in Show: Design.",
    date: '23 June 2026',
    authorName: 'Jay Hollywood',
    authorAvatar:
      'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/jay-69489648643993_vyZjgWd-v.jpg?tr=w-70,h-70,q-80',
    image:
      'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/AWA2026_1hYjYH-jb.jpg?tr=w-600,h-760,q-85',
  },
  {
    slug: 'global-recognition-for-two-byte-operator-projects',
    title: 'Global recognition for two Byte Operator projects',
    category: 'Awards',
    readTime: '3 min read',
    excerpt:
      'Celebrating two major global award wins, alongside 11 nominations at the upcoming Australian Web Awards.',
    date: '11 May 2026',
    authorName: 'Jay Hollywood',
    authorAvatar:
      'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/jay-69489648643993_vyZjgWd-v.jpg?tr=w-70,h-70,q-80',
    image:
      'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/Awards2026_B_zEETswP.jpg?tr=w-600,h-760,q-85',
  },
  {
    slug: 'craft-in-a-post-ai-world',
    title: 'Craft in a post-AI world',
    category: 'Opinion, Design',
    readTime: '6 min read',
    excerpt:
      'AI can generate output that’s right for someone, but that someone won’t necessarily be you. Crafting for impact requires intention, thought and care — essential elements for a satisfying experience that only humans can bring.',
    date: '12 December 2025',
    authorName: 'Niaal',
    authorAvatar:
      'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/niaal-69489648603028_qcIEIi1K_.jpg?tr=w-70,h-70,q-80',
    image:
      'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/craft-and-ai-122108139247251__uTiQa8L1.jpg?tr=w-600,h-760,q-85',
  },
  {
    slug: 'you-dont-have-to-be-a-unicorn',
    title: "You don't have to be a unicorn",
    category: 'Opinion, Design, UX',
    readTime: '9 min read',
    excerpt:
      'UX, UI and Product disciplines are related, but distinctly different. A generalist (aka. "unicorn") is often touted as a job candidate in high demand, but the reality doesn\'t always match the advertising.',
    date: '18 November 2025',
    authorName: 'Niaal',
    authorAvatar:
      'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/niaal-69489648603028_qcIEIi1K_.jpg?tr=w-70,h-70,q-80',
    image:
      'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/unicorn-104796855832107_w3eSrC9hb.jpg?tr=w-600,h-760,q-85',
  },
  {
    slug: 'what-does-a-good-website-cost',
    title: 'What does a good website cost?',
    category: 'Opinion',
    readTime: '7 min read',
    excerpt:
      'Cost alone is a poor marker for project success. Instead, a focus on quality leads to longer-lasting success as you minimise technical debt, maintenance costs and website “erosion”.',
    date: '2 October 2025',
    authorName: 'Niaal',
    authorAvatar:
      'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/niaal-69489648603028_qcIEIi1K_.jpg?tr=w-70,h-70,q-80',
    image:
      'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/components-97030827573339_Yoi4RCyW-.png?tr=w-600,h-760,q-85',
  },
  {
    slug: 'understanding-wcag-2-2',
    title: 'Understanding WCAG 2.2',
    category: 'Accessibility, Dev',
    readTime: '8 min read',
    excerpt:
      'WCAG 2.2 brings nine new accessibility criteria, with several targeting cognitive and learning barriers. With these changes come clearer plans for building websites that don’t leave users lost or stuck.',
    date: '18 September 2025',
    authorName: 'Teegan',
    authorAvatar:
      'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/teegan-69489648607126_kSZPiKMe6.jpg?tr=w-70,h-70,q-80',
    image:
      'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/crowd-92086257154567_DOCPqK0rN.png?tr=w-600,h-760,q-85',
  },
  {
    slug: 'how-deep-do-we-dive',
    title: 'How deep do we dive?',
    category: 'UX, Design',
    readTime: '7 min read',
    excerpt:
      'Lean user research uses lightweight and targeted strategies to gain lots of insight for relatively less cost. Early, nimble research helps catch critical ‘unknown unknowns’ and incorrect assumptions before they can jeopardise the project budget.',
    date: '10 September 2025',
    authorName: 'Niaal',
    authorAvatar:
      'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/niaal-69489648603028_qcIEIi1K_.jpg?tr=w-70,h-70,q-80',
    image:
      'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/investigating-89235244842143_lcCAt6m6f.png?tr=w-600,h-760,q-85',
  },
  {
    slug: 'surfacing-content-for-llms',
    title: 'Surfacing content for LLMs',
    category: 'SEO, AI, Copywriting',
    readTime: '8 min read',
    excerpt:
      'GEO focuses on LLMs and AI assistants that summarise, synthesise, or directly answer user questions. Focus on high-quality content and deep expertise in your topic to remain relevant in the new world of LLM search.',
    date: '26 August 2025',
    authorName: 'Ali',
    authorAvatar:
      'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/ali-69489648648090_u1CQEy2Qz.jpg?tr=w-70,h-70,q-80',
    image:
      'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/iceberg-83990617226772_cFtXmKLGn.png?tr=w-600,h-760,q-85',
  },
  {
    slug: 'turning-insight-into-impact',
    title: 'Turning insight into impact',
    category: 'Design, UX',
    readTime: '5 min read',
    excerpt:
      'Empathetic design is the practice of crafting products that respect the human experience. While empathy-based work may take longer or cost more, the value proposition and results promote stronger engagement and better outcomes.',
    date: '15 August 2025',
    authorName: 'Niaal',
    authorAvatar:
      'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/niaal-69489648603028_qcIEIi1K_.jpg?tr=w-70,h-70,q-80',
    image:
      'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/empathy_design-80094043120018_L8kw6Y3af.jpg?tr=w-600,h-760,q-85',
  },
  {
    slug: 'accessibility-means-designing-for-yourself-too',
    title: 'Accessibility means designing for yourself too',
    category: 'Accessibility, Design',
    readTime: '3 min read',
    excerpt:
      'Accessibility isn’t just for “other people”, it’s for all of us, including you. Whether it’s a migraine, slow internet, or simply growing older, everyone faces temporary or permanent limitations at some point, making accessible design a gift to your future self.',
    date: '30 July 2025',
    authorName: 'Paul',
    authorAvatar:
      'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/paul-69489648664475_qqcg3poMn.jpg?tr=w-70,h-70,q-80',
    image:
      'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/accessibility-69103901375418_gfEf13WyH.jpeg?tr=w-600,h-760,q-85',
  },
];
