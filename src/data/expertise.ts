export interface ExpertiseService {
  title: string;
  slug: string;
  color: string; // 'cyan' | 'pink' | 'blue' | 'green' | 'purple' | 'yellow'
  iconName: string;
  description: string;
  deliverables: string[];
}

export interface ExpertiseCategory {
  title: string;
  services: ExpertiseService[];
}

export const expertiseTaxonomy: ExpertiseCategory[] = [
  {
    title: 'What We Do',
    services: [
      {
        title: 'Websites',
        slug: 'websites',
        color: 'cyan',
        iconName: 'Globe',
        description: 'Bespoke, high-performance web destinations crafted with precision engineering and striking visual design.',
        deliverables: ['Custom Next.js Engineering', 'Interactive 3D / WebGL', 'SEO & Performance Optimisation', 'CMS Architecture'],
      },
      {
        title: 'Software',
        slug: 'web-applications',
        color: 'pink',
        iconName: 'Layout',
        description: 'Scalable cloud applications and SaaS platforms that solve mission-critical operational challenges.',
        deliverables: ['Custom Web Applications', 'Cloud Infrastructure (AWS/GCP)', 'API Integrations', 'Multi-tenant Architecture'],
      },
      {
        title: 'Mobile Apps',
        slug: 'mobile-apps',
        color: 'blue',
        iconName: 'Smartphone',
        description: 'Native iOS and Android applications designed for tactile fluidity, offline reliability, and delightful user retention.',
        deliverables: ['React Native & Flutter', 'Offline Sync & SQLite', 'Push Notifications', 'App Store Optimisation'],
      },
      {
        title: 'eCommerce',
        slug: 'ecommerce',
        color: 'green',
        iconName: 'ShoppingBag',
        description: 'High-converting headless commerce experiences tailored for ambitious global direct-to-consumer and B2B brands.',
        deliverables: ['Headless Shopify Plus', 'Custom Checkout Flows', 'ERP / Inventory Sync', 'Conversion Rate Optimisation'],
      },
      {
        title: 'Data Vis',
        slug: 'data-visualisation',
        color: 'purple',
        iconName: 'PieChart',
        description: 'Transforming high-dimensional data into engaging, interactive geospatial and algorithmic stories.',
        deliverables: ['3D Geospatial Visualisations', 'Real-time Dashboards', 'D3.js & Three.js Canvas', 'Accessible Data Narratives'],
      },
    ],
  },
  {
    title: 'Design & UX',
    services: [
      {
        title: 'User Research',
        slug: 'user-research-validation',
        color: 'purple',
        iconName: 'Search',
        description: 'Rigorous qualitative and quantitative user research uncovering core insights and behavioural triggers.',
        deliverables: ['User Interviews & Personas', 'Usability Auditing', 'Information Architecture', 'Competitor Benchmarking'],
      },
      {
        title: 'UX Design',
        slug: 'user-experience-design',
        color: 'cyan',
        iconName: 'Layers',
        description: 'User journeys, wireframes, and intuitive interaction flows engineered to reduce friction and elevate clarity.',
        deliverables: ['Customer Journey Mapping', 'Wireframing & Flowcharts', 'Accessibility (WCAG 2.2 AA)', 'Conversion Funnels'],
      },
      {
        title: 'UI Design',
        slug: 'user-interface-design',
        color: 'pink',
        iconName: 'Palette',
        description: 'Distinctive visual identities, bespoke micro-interactions, and pixel-perfect aesthetic polish.',
        deliverables: ['Visual Identity & Art Direction', 'High-Fidelity Interface Design', 'Motion Design & Micro-animations', 'Interactive Prototypes'],
      },
      {
        title: 'Prototyping',
        slug: 'prototyping',
        color: 'blue',
        iconName: 'Sparkles',
        description: 'Rapid, tactile code and Figma prototypes that bring concepts to life before committing full engineering capital.',
        deliverables: ['Interactive Code Prototypes', 'Figma Variables & Micro-interactions', 'User Testing Prototypes', 'Proof of Concept Labs'],
      },
      {
        title: 'Design Systems',
        slug: 'design-systems',
        color: 'green',
        iconName: 'Grid',
        description: 'Scalable, multi-brand tokenized design systems bridging Figma components and React component libraries.',
        deliverables: ['Design Token Architecture', 'Figma UI Kits', 'Tailwind / React Component Libraries', 'Storybook Documentation'],
      },
    ],
  },
  {
    title: 'Technology',
    services: [
      {
        title: 'Headless',
        slug: 'headless',
        color: 'purple',
        iconName: 'Zap',
        description: 'Decoupled modern frontends delivering unmatched page speed, infinite flexibility, and bank-grade security.',
        deliverables: ['Next.js App Router Frontend', 'Edge Caching & Vercel / Cloudflare', 'GraphQL & REST API Bridges', 'Microservices Architecture'],
      },
      {
        title: 'React.js',
        slug: 'react-js',
        color: 'purple',
        iconName: 'Code',
        description: 'Enterprise-grade React and TypeScript development following modern component paradigms and strict type safety.',
        deliverables: ['React 19 & Server Components', 'State Management & Zustand', 'WebGL & Canvas Integration', 'Automated Testing (Vitest/Playwright)'],
      },
      {
        title: 'Payload CMS',
        slug: 'payload-cms',
        color: 'purple',
        iconName: 'Database',
        description: 'Modern headless TypeScript CMS providing flexible block builders and lightning-fast editorial workflows.',
        deliverables: ['Payload CMS 3.0 Architecture', 'Custom Admin Components', 'Role-Based Access Control', 'Multi-Language Localization'],
      },
      {
        title: 'Laravel',
        slug: 'laravel',
        color: 'pink',
        iconName: 'Server',
        description: 'Robust PHP and Laravel backends powering complex business logic, queues, and high-throughput APIs.',
        deliverables: ['Laravel Backend APIs', 'Livewire & Alpine Integration', 'PostgreSQL / MySQL Schema Design', 'Secure Payment Gateways'],
      },
      {
        title: 'AI & Automation',
        slug: 'ai-automation',
        color: 'purple',
        iconName: 'Cpu',
        description: 'Integrating LLMs, autonomous agentic pipelines, and smart automation into customer-facing products.',
        deliverables: ['LLM Workflow Integration', 'Custom Vector Search & RAG', 'Automated Content Pipelines', 'Intelligent Chatbots & Assistants'],
      },
    ],
  },
  {
    title: 'Experience',
    services: [
      {
        title: 'Commercial',
        slug: 'commercial',
        color: 'blue',
        iconName: 'Briefcase',
        description: 'Helping market leaders and global enterprises establish digital supremacy in competitive sectors.',
        deliverables: ['Enterprise Web Platforms', 'Global Brand Repositioning', 'Multi-region Localization', 'Corporate Portal Engineering'],
      },
      {
        title: 'Not for Profit',
        slug: 'not-for-profit',
        color: 'pink',
        iconName: 'Heart',
        description: 'Empowering charities, humanitarian missions, and public purpose organizations to amplify their global impact.',
        deliverables: ['Donation & Campaign Platforms', 'Accessible Storytelling', 'Impact Data Visualisations', 'Community Engagement Portals'],
      },
      {
        title: 'Innovation',
        slug: 'innovation-startups',
        color: 'purple',
        iconName: 'Rocket',
        description: 'Accelerating early-stage and venture-backed startups from MVP idea to market-defining execution.',
        deliverables: ['MVP Sprint & Product Strategy', 'Rapid Prototyping', 'Investor Pitch Demos', 'Scalable Launch Infrastructure'],
      },
      {
        title: 'Education',
        slug: 'education',
        color: 'yellow',
        iconName: 'Sparkles',
        description: 'Modern institutional platforms and digital learning tools engineered for universities, schools, and edtech ventures.',
        deliverables: ['Admissions & Student Portals', 'Course Directories & Schedules', 'Accessibility & Multilingual UX', 'LMS Integrations'],
      },
      {
        title: 'Community',
        slug: 'community',
        color: 'cyan',
        iconName: 'Heart',
        description: 'Grassroots advocacy portals, cultural archives, and social initiatives bringing people together.',
        deliverables: ['Public Purpose Strategy', 'Community Membership UX', 'Participatory Digital Platforms', 'Impact Storytelling'],
      },
    ],
  },
];
