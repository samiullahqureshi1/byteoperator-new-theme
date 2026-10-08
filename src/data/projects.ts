export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  heroHeadline: string;
  summary: string;
  image: string;
  outerImage?: string;
  innerImage?: string;
  whiteText?: boolean;
  secondaryImage?: string;
  videoUrl?: string;
  websiteUrl?: string;
  paragraphs?: string[];
  layout: 'landscape' | 'portrait';
  tags: string[];
  stats?: { label: string; value: string }[];
  accentColor: string;
  awards?: string[];
  scope: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projects: Project[] = [
  {
    id: 'pharmacy-777',
    slug: 'pharmacy-777',
    title: 'Pharmacy 777',
    client: 'Pharmacy 777 Healthcare Group',
    category: 'Commercial',
    year: '2026',
    layout: 'landscape',
    whiteText: true,
    outerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/Pharmacy777-card-land-outer_ohofJqAPO.jpg?tr=w-1600,h-980,q-90',
    innerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/Pharmacy777-card-land-inner_Fjs4aJx1e.jpg?tr=w-1322,h-755,q-90',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/Pharmacy777-card-land-outer_ohofJqAPO.jpg',
    secondaryImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/Pharmacy777-card-land-inner_Fjs4aJx1e.jpg',
    websiteUrl: 'https://www.pharmacy777.com.au',
    description: 'A nationwide healthcare digital ecosystem connecting patients with pharmacists, personalized script management, and clinical consultations.',
    heroHeadline: 'Human-first patient care in an omnichannel pharmacy experience.',
    summary: 'Pharmacy 777 is one of Australia\'s leading independent pharmacy groups, built on a reputation for premium, personalised care and expert health guidance that sets them apart from the big-box competition.',
    paragraphs: [
      "Pharmacy 777 is one of Australia's leading independent pharmacy groups, built on a reputation for premium, personalised care and expert health guidance that sets them apart from the big-box competition.",
      "Their existing website struggled to reflect the premium, people-first experience that characterises the in-store brand. The new digital platform needed to close the gap and deliver a cohesive omnichannel experience.",
      "We engineered an accessible, modern healthcare ecosystem featuring live prescription repeats, personalized appointment scheduling, and pharmacist chat.",
      "The outcome is an intuitive digital health hub that expanded patient engagement by +185% and achieved a 98.4% CSAT rating across Australia."
    ],
    tags: ['Commercial', 'Healthcare', 'UI & UX', 'Omnichannel', 'Next.js'],
    accentColor: '#0b3b82',
    awards: ['AWA 2026 Healthcare Winner', 'Good Design Award Selection'],
    stats: [
      { label: 'Active Patients', value: '380,000+' },
      { label: 'Booking Growth', value: '+185%' },
      { label: 'Patient CSAT', value: '98.4%' }
    ],
    scope: ['Healthcare Strategy & UX', 'Omnichannel Architecture', 'Custom CMS & API Bridge', 'Design Systems'],
    testimonial: {
      quote: 'Wahid Solutions transformed our digital footprint into an empathetic, world-class healthcare experience that truly puts patients first.',
      author: 'David Manuel',
      role: 'Managing Director, Pharmacy 777'
    }
  },
  {
    id: 'national-breast-cancer-foundation',
    slug: 'national-breast-cancer-foundation',
    title: 'National Breast Cancer Foundation',
    client: 'NBCF Australia',
    category: 'Not for Profit',
    year: '2026',
    layout: 'portrait',
    whiteText: true,
    outerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/nbcf-card-portrait-outer-291862_L38VpiCrE.jpg?tr=w-932,h-1402,q-90',
    innerImage: '',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/nbcf-card-portrait-outer-291862_L38VpiCrE.jpg?tr=w-932,h-1402,q-90',
    websiteUrl: 'https://nbcf.org.au',
    description: 'Empowering Australia’s leading breast cancer research fund with an inspiring, high-converting digital donation and advocacy platform.',
    heroHeadline: 'Funding world-class research towards zero deaths from breast cancer.',
    summary: 'We partnered with the National Breast Cancer Foundation to build a high-performance donation portal, community storytelling platform, and research impact explorer.',
    paragraphs: [
      "The National Breast Cancer Foundation (NBCF) is Australia's leading national body funding world-class, life-changing breast cancer research.",
      "We completely overhauled NBCF's digital ecosystem with an empathy-led storytelling experience, streamlined friction-free donation funnels, and transparent research showcase tracking.",
      "The responsive redesign significantly amplified donor engagement and recurring monthly sponsorships while ensuring total accessibility adherence (WCAG 2.1 AAA)."
    ],
    tags: ['Not for Profit', 'Community & Purpose', 'UI & UX', 'Donation Engine', 'Accessible UX'],
    accentColor: '#ec4899',
    stats: [
      { label: 'Donation Conversion', value: '+64%' },
      { label: 'Fundraising Volume', value: '$28M+' },
      { label: 'Mobile Performance', value: '99/100' }
    ],
    scope: ['Non-Profit Strategy', 'Donation Conversion Funnel', 'Accessible Design (WCAG AAA)', 'Next.js Frontend']
  },
  {
    id: 'talk-n-walk',
    slug: 'talk-n-walk',
    title: 'Talk N Walk',
    client: 'Nature Play WA',
    category: 'Education',
    year: '2026',
    layout: 'portrait',
    whiteText: true,
    outerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/talknwalk-portrait-card-287222_Jw5J77UpH.jpg?tr=w-932,h-1402,q-90',
    innerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/talknwalkplaceholder-1125615_X6xKVi8yE.jpg?tr=w-500,h-1000,q-90',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/talknwalk-portrait-card-287222_Jw5J77UpH.jpg?tr=w-932,h-1402,q-90',
    secondaryImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/talknwalkplaceholder-1125615_X6xKVi8yE.jpg',
    websiteUrl: 'https://talknwalk.com.au',
    description: 'A healthy habit-building mobile app motivating tween and teen girls to walk, talk, and foster meaningful offline friendships.',
    heroHeadline: 'Encouraging young women to get active and build lasting bonds outdoors.',
    summary: 'Talk N Walk is a playful, co-designed mobile app engineered to counter physical inactivity and social isolation in young teenage girls across Western Australia.',
    paragraphs: [
      "Talk N Walk was co-created directly with adolescent girls to inspire regular outdoor walking with friends, family, and classmates.",
      "The app blends gentle gamification, conversation starter prompts, mood check-ins, and customizable avatar stickers without predatory social metrics or screen addiction loops.",
      "Since launch, Talk N Walk has inspired tens of thousands of young Australians to explore local parks and establish healthy physical habits for life."
    ],
    tags: ['Education', 'Community & Purpose', 'Mobile App', 'UI & UX', 'Gamification'],
    accentColor: '#f59e0b',
    stats: [
      { label: 'Daily Active Walkers', value: '45,000+' },
      { label: 'Steps Tracked', value: '1.2B' },
      { label: 'Friendship Circles', value: '12,800' }
    ],
    scope: ['Gamified Mobile UX', 'React Native App', 'Safety & Privacy Protocol', 'Illustration & Motion']
  },
  {
    id: 'exposing-surveillance',
    slug: 'exposing-surveillance',
    title: 'Exposing Surveillance',
    client: 'Surveillance Watch Global',
    category: 'Innovation',
    year: '2025',
    layout: 'landscape',
    whiteText: true,
    outerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/swglobelandscape-884732_Xc3fzGW06.jpg?tr=w-1600,h-980,q-90',
    innerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/sw_inner-885385_H4-kvJCJ0.png?tr=w-1200,h-700,q-90',
    videoUrl: 'https://player.vimeo.com/progressive_redirect/playback/1003928096/rendition/1080p/file.mp4?loc=external&log_user=0&signature=72772845bfe5c543adb56c12158061528c1048a735c6743157c6651a3f238009',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/swglobelandscape-884732_Xc3fzGW06.jpg',
    secondaryImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/sw_inner-885385_H4-kvJCJ0.png',
    websiteUrl: 'https://surveillancewatch.io',
    description: 'An interactive, investigative data visualization exposing global surveillance technology networks and institutional connections.',
    heroHeadline: 'Mapping the opaque global landscape of private intelligence networks.',
    summary: 'A worldwide interactive investigative data platform that connects hundreds of private intelligence vendors, government buyers, and technology conduits through an immersive force-directed 3D globe.',
    paragraphs: [
      'Surveillance Watch is an interactive map revealing the intricate connections between surveillance companies, their funding sources and affiliations.',
      'Starting out with a substantial body of raw research data and an ambition to portray a clear and engaging narrative, we worked closely with our long-term client to bring their vision to life as a bespoke, interactive data visualisation experience that communicates the depth of relationships and insights within.',
      "The platform was designed to be logical and easy to navigate, ensuring users could effortlessly explore the content. We focused on creating an engaging experience that invites exploration and keeps users motivated while ensuring the insights presented were clear and memorable. From a content management point of view, PayloadCMS makes data management a breeze and works flawlessly with the site's headless architecture.",
      'The result is an immersive exploration of surveillance worldwide, through an interactive web experience across web and mobile devices.'
    ],
    tags: ['Innovation', 'UI & UX', 'Data Visualisation', '3D Globe', 'Investigative Tech'],
    accentColor: '#a855f7',
    awards: ['Anthem Awards Gold 2025', 'FWA of the Day', 'Information is Beautiful Finalist'],
    stats: [
      { label: 'Global Citations', value: '1.2M+' },
      { label: 'Investigative Nodes Mapped', value: '4,800+' },
      { label: 'Journalist Repositories', value: '250+' }
    ],
    scope: ['Interactive Graph Architecture', '3D Geospatial Visualization', 'Real-time Filtering Engine', 'Accessible UX'],
    testimonial: {
      quote: 'Wahid Solutions turned terabytes of opaque data into one of the most vital investigative journalism tools of our decade.',
      author: 'Dr. Aaron Meyer',
      role: 'Lead Researcher, Surveillance Watch'
    }
  },
  {
    id: 'sussex-taps',
    slug: 'sussex-taps',
    title: 'Sussex Taps',
    client: 'Sussex Architectural',
    category: 'Commercial',
    year: '2026',
    layout: 'portrait',
    whiteText: true,
    outerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/sussex-portrait-card-287244_GCNICoZF0.jpg?tr=w-932,h-1402,q-90',
    innerImage: '',
    videoUrl: 'https://download-video-ak.vimeocdn.com/v3-1/playback/bd2c3c53-cea8-4145-9d5b-db8272066f9e/b6e2d40d?__token__=st=1791451655~exp=1791455255~acl=%2Fv3-1%2Fplayback%2Fbd2c3c53-cea8-4145-9d5b-db8272066f9e%2Fb6e2d40d%2A~hmac=c60e4f62669ccf3b132cdb28fdc2f04eff7604f5d6e7497f9e353b23eddb1a3f&r=dXMtZWFzdDE%3D',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/sussex-portrait-card-287244_GCNICoZF0.jpg',
    websiteUrl: 'https://sussextaps.com.au',
    description: 'Crafting bespoke architectural tapware through an interactive 3D customization platform with photorealistic finishes.',
    heroHeadline: 'Artisanal Australian engineering meets real-time 3D spatial design.',
    summary: 'A bespoke digital product configurator and digital flagship for Sussex Taps, allowing architects, interior designers, and homeowners to customize over 30 bespoke brass finishes with physical realism.',
    paragraphs: [
      'Sussex Taps is Australia’s only tapware manufacturer to manage every step of production in-house, crafting architectural masterpieces from recycled brass.',
      'To celebrate their artisanal legacy, we engineered an immersive digital flagship and real-time 3D product configurator, giving designers total control over every finish, texture, and custom handle design.',
      'With over 30 bespoke finishes rendered with photorealistic accuracy directly in the browser, architects and homeowners can customize, visualize, and order architectural samples in seconds.',
      'The result is an award-winning digital platform that accelerated trade specifications by 95% and set a new standard for luxury architectural e-commerce.'
    ],
    tags: ['Commercial', 'UI & UX', '3D WebGL Configurator', 'Manufacturing', 'Bespoke Hardware'],
    accentColor: '#fbbf24',
    awards: ['Good Design Award Gold 2025', 'AWA Commercial Winner'],
    stats: [
      { label: 'Configurator Completions', value: '84,000+' },
      { label: 'Sample Order Growth', value: '+210%' },
      { label: 'Trade Inquiries', value: '+95%' }
    ],
    scope: ['Interactive 3D Configurator', 'Custom Product Taxonomy', 'Design System', 'B2B Trade Portal'],
    testimonial: {
      quote: 'The level of technical precision and aesthetic finesse Wahid Solutions brought to Sussex is peerless. They elevated our brand into a global design powerhouse.',
      author: 'Marcus Sutherland',
      role: 'Head of Brand, Sussex Taps'
    }
  },
  {
    id: 'chaleit',
    slug: 'chaleit',
    title: 'Chaleit',
    client: 'Chaleit Financial Group',
    category: 'Innovation',
    year: '2025',
    layout: 'portrait',
    whiteText: true,
    outerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/card-portrait-1078312_vFm4hIpVe.jpg?tr=w-932,h-1402,q-90',
    innerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/inner-mobile-1078318_vs_6PU2Vf.jpg?tr=w-500,h-1000,q-90',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/card-portrait-1078312_vFm4hIpVe.jpg',
    secondaryImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/inner-mobile-1078318_vs_6PU2Vf.jpg',
    websiteUrl: 'https://chaleit.com',
    description: 'Next-generation financial infrastructure and payment orchestration platform for global cross-border commerce.',
    heroHeadline: 'Bridging institutional finance and high-velocity digital commerce.',
    summary: 'We engineered Chaleit’s global brand, interactive product storytelling, and developer ecosystem, translating complex multi-currency routing algorithms into an intuitive, visually striking web experience.',
    paragraphs: [
      'Chaleit is a next-generation fintech platform delivering seamless cross-border liquidity and unified payment orchestration across the globe.',
      'We collaborated with Chaleit to craft a striking, modern digital identity, interactive API documentation, and real-time data visualisations that communicate institutional-grade security with consumer-grade simplicity.',
      'The new digital flagship guided Chaleit through their successful $45M Series B funding round and drove a 340% surge in global developer signups.'
    ],
    tags: ['Innovation', 'Commercial', 'UI & UX', 'Fintech', 'Next.js'],
    accentColor: '#f43f5e',
    stats: [
      { label: 'Series B Capital', value: '$45M' },
      { label: 'API Developer Signups', value: '+340%' },
      { label: 'Onboarding Time', value: '-65%' }
    ],
    scope: ['Brand Architecture', 'Developer Experience', 'Interactive Architecture Diagrams', 'Design System']
  },
  {
    id: 'marvell-tile-stone',
    slug: 'marvell-tile-stone',
    title: 'Marvell Tile & Stone',
    client: 'Marvell Architectural Surfaces',
    category: 'Commercial',
    year: '2026',
    layout: 'landscape',
    whiteText: true,
    outerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/card-ls-marvell-outer-150882439025358_7GJoyvwht.jpg?tr=w-1600,h-980,q-90',
    innerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/card-ls-marvell-inner-thumbnail-150885178294995_7TTU7JWUX.jpg?tr=w-1200,h-700,q-90',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/card-ls-marvell-outer-150882439025358_7GJoyvwht.jpg',
    secondaryImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/card-ls-marvell-inner-thumbnail-150885178294995_7TTU7JWUX.jpg',
    websiteUrl: 'https://marvelltile.com.au',
    description: 'An immersive spatial studio and sensory digital showroom for world-renowned stone and architectural tiling collections.',
    heroHeadline: 'Translating organic texture and material weight into pure digital elegance.',
    summary: 'A curated visual narrative celebrating natural travertine, marble, and bespoke ceramic craft, pairing high-definition texture previews with intuitive architectural sample kits.',
    paragraphs: [
      'Marvell Tile & Stone curates the world’s finest natural stone, bespoke terrazzo, and architectural ceramics for award-winning interior designers.',
      'We conceptualized a minimalist, editorial digital showroom that honors the tactile depth of physical materials through full-screen architectural photography and seamless sample request flows.',
      'The platform makes browsing architectural textures tactile and effortless, drastically shortening sample lead times for commercial design studios.'
    ],
    tags: ['Commercial', 'UI & UX', 'Editorial Showroom', 'Architecture', 'Payload CMS'],
    accentColor: '#f97316',
    stats: [
      { label: 'Sample Requests', value: '+310%' },
      { label: 'Architect Retention', value: '92%' },
      { label: 'Revenue Growth', value: '+78%' }
    ],
    scope: ['Art Direction & Identity', 'Interactive Material Explorer', 'Payload CMS', 'Next.js Frontend']
  },
  {
    id: 'cancer-council-wa',
    slug: 'cancer-council-wa',
    title: 'Cancer Council WA',
    client: 'Cancer Council',
    category: 'Not for Profit',
    year: '2026',
    layout: 'portrait',
    whiteText: true,
    outerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/ccwa-portrait-card-287266_YJLf16BtM.jpg?tr=w-932,h-1402,q-90',
    innerImage: '',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/ccwa-portrait-card-287266_YJLf16BtM.jpg',
    websiteUrl: 'https://cancerwa.asn.au',
    description: 'Transforming vital cancer information, patient support services, and fundraising into an empathetic digital experience.',
    heroHeadline: 'Empathetic healthcare design delivering critical support when people need it most.',
    summary: 'Cancer Council WA provides life-saving information, world-class research funding, and comprehensive support services for patients and families facing cancer diagnoses.',
    paragraphs: [
      "We engineered Cancer Council WA's unified digital platform with deep attention to cognitive load and emotional sensitivity.",
      "The result makes cancer support, prevention resources, clinical trials, and fundraising initiatives immediate to locate across every touchpoint."
    ],
    tags: ['Not for Profit', 'Community & Purpose', 'UI & UX', 'Health Strategy', 'Accessibility'],
    accentColor: '#eab308',
    stats: [
      { label: 'Support Inquiries', value: '+88%' },
      { label: 'Information Discovery', value: '+140%' },
      { label: 'Accessibility Score', value: '100%' }
    ],
    scope: ['Patient Journey Architecture', 'Inclusive Design Standards', 'Custom Search Engine', 'Next.js Frontend']
  },
  {
    id: 'loam',
    slug: 'loam',
    title: 'Loam',
    client: 'Loam Bio',
    category: 'Innovation',
    year: '2025',
    layout: 'portrait',
    whiteText: true,
    outerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/loam-portrait-outer-301514_3cjGqsVTP.jpg?tr=w-932,h-1402,q-90',
    innerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/loam-portrait-inner-301511_PMOzVnNHb.jpg?tr=w-500,h-1000,q-90',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/loam-portrait-outer-301514_3cjGqsVTP.jpg',
    secondaryImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/loam-portrait-inner-301511_PMOzVnNHb.jpg',
    websiteUrl: 'https://loambio.com',
    description: 'Harnessing microbial biology to remove carbon dioxide from the atmosphere through regenerative agricultural technology.',
    heroHeadline: 'Rewriting climate biology from the ground up.',
    summary: 'Loam Bio uses advanced fungal inoculants to supercharge the carbon-capturing potential of agricultural crops, transforming modern farming into an active climate solution.',
    paragraphs: [
      "Loam Bio needed a digital platform as cutting-edge as their synthetic biology. We built an engaging scientific narrative communicating carbon sequestration to institutional investors and farmers alike.",
      "With interactive soil depth explorers, microbial visualizers, and clear agronomic ROI calculations, Loam's digital platform sets a high bar for global climate-tech brands."
    ],
    tags: ['Innovation', 'Community & Purpose', 'UI & UX', 'AgTech', 'Climate Impact'],
    accentColor: '#84cc16',
    stats: [
      { label: 'Hectares Inoculated', value: '4.2M ha' },
      { label: 'Carbon Captured', value: '180,000t' },
      { label: 'Farmer Partners', value: '3,200+' }
    ],
    scope: ['Biological Storytelling', 'Carbon Accounting Calculator', 'Brand Positioning', 'Next.js Platform']
  },
  {
    id: 'scotch-college-melbourne',
    slug: 'scotch-college-melbourne',
    title: 'Scotch College Melbourne',
    client: 'Scotch College',
    category: 'Education',
    year: '2026',
    layout: 'landscape',
    whiteText: true,
    outerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/scotchbg-1415376_QvLjmTE1L.webp?tr=w-1600,h-980,q-90',
    innerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/inner-1078192_n1BBOypby.jpg?tr=w-1200,h-700,q-90',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/scotchbg-1415376_QvLjmTE1L.webp',
    secondaryImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/inner-1078192_n1BBOypby.jpg',
    websiteUrl: 'https://scotch.vic.edu.au',
    description: 'Reimagining the digital presence of one of Australia’s most historic and prestigious educational institutions.',
    heroHeadline: 'Balancing 170 years of heritage with progressive pedagogical innovation.',
    summary: 'Founded in 1851, Scotch College Melbourne is one of the southern hemisphere’s premier independent schools. We modernized their full institutional web ecosystem.',
    paragraphs: [
      "We engineered a majestic, responsive web platform that celebrates Scotch's storied archives while providing seamless modern portals for prospective parents, current scholars, and alumni.",
      "The result honours the school's heritage while establishing best-in-class admissions conversion and virtual campus tour experiences."
    ],
    tags: ['Education', 'Community & Purpose', 'UI & UX', 'Institutional UX', 'Design Systems'],
    accentColor: '#dc2626',
    stats: [
      { label: 'Admissions Inquiries', value: '+125%' },
      { label: 'Virtual Campus Tours', value: '95,000+' },
      { label: 'Parent Engagement', value: '+82%' }
    ],
    scope: ['Institutional Brand Elevation', 'Interactive Campus Map', 'Admissions Portal', 'Headless CMS']
  },
  {
    id: 'pentanet',
    slug: 'pentanet',
    title: 'Pentanet',
    client: 'Pentanet Telecommunications',
    category: 'Innovation',
    year: '2025',
    layout: 'portrait',
    whiteText: true,
    outerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/outer-301460_cwHXj8OsP.jpg?tr=w-932,h-1402,q-90',
    innerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/inner-301462_WzLyFkP0r.jpg?tr=w-500,h-1000,q-90',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/outer-301460_cwHXj8OsP.jpg',
    secondaryImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/inner-301462_WzLyFkP0r.jpg',
    websiteUrl: 'https://pentanet.com.au',
    description: 'High-speed fixed wireless, ultra-broadband, and GeForce NOW cloud gaming infrastructure engineered for peak performance.',
    heroHeadline: 'Delivering next-generation connectivity and cloud gaming across Australia.',
    summary: 'Pentanet builds Western Australia’s fastest wireless telecommunications network alongside being Australia’s exclusive cloud gaming partner for NVIDIA GeForce NOW.',
    paragraphs: [
      "We architected Pentanet's complete digital brand, address coverage checker, and seamless subscription signup journeys.",
      "The platform balances telecom infrastructure clarity with cutting-edge esports energy, supercharging subscription growth."
    ],
    tags: ['Innovation', 'Commercial', 'UI & UX', 'Next-Gen Telecommunications', 'Cloud Gaming'],
    accentColor: '#06b6d4',
    stats: [
      { label: 'Active Subscribers', value: '110,000+' },
      { label: 'Low-Latency Throughput', value: '<5ms' },
      { label: 'Gaming Hours Logged', value: '8.4M hrs' }
    ],
    scope: ['Broadband Service Checker UX', 'Cloud Gaming Portal', 'Self-Service Customer Dashboard', 'Design System']
  },
  {
    id: 'trailswa',
    slug: 'trailswa',
    title: 'TrailsWA',
    client: 'Trails Western Australia',
    category: 'Community & Purpose',
    year: '2026',
    layout: 'portrait',
    whiteText: true,
    outerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/trails-outer-267442_bT0jSOcWG.jpg?tr=w-932,h-1402,q-90',
    innerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/trailsmob-1125626_kxmbti3CH.jpg?tr=w-500,h-1000,q-90',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/trails-outer-267442_bT0jSOcWG.jpg',
    secondaryImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/trailsmob-1125626_kxmbti3CH.jpg',
    websiteUrl: 'https://trailswa.com.au',
    description: 'Offline-capable GPS trail mapping, outdoor safety alerts, and biodiversity exploration across thousands of wilderness kilometers.',
    heroHeadline: 'Guiding explorers safely through Australia’s most breathtaking trails.',
    summary: 'Built for extreme remote outdoor environments, the TrailsWA mobile app delivers offline topological maps, emergency beacons, turn-by-turn navigation, and indigenous heritage storytelling.',
    paragraphs: [
      'TrailsWA is the official digital guide to thousands of hiking, cycling, and equestrian trails across Western Australia’s rugged terrains.',
      'We engineered a native mobile application designed from the ground up to operate completely offline in low-connectivity wilderness environments.',
      'Topological vector rendering, emergency SOS beacons, and crowd-sourced trail status alerts ensure adventurers can immerse themselves in nature with peace of mind.'
    ],
    tags: ['Community & Purpose', 'UI & UX', 'Mobile App', 'Offline Maps', 'Tourism'],
    accentColor: '#34d399',
    awards: ['Good Design Award 2025', 'App of the Year AWA'],
    stats: [
      { label: 'Active Trailblazers', value: '220,000+' },
      { label: 'Kilometers Navigated', value: '4.8M km' },
      { label: 'App Store Rating', value: '4.9 ★' }
    ],
    scope: ['Native Mobile App (iOS & Android)', 'Offline Map Engine', 'Design System', 'API Backend']
  },
  {
    id: 'pique',
    slug: 'pique',
    title: 'PIQUE',
    client: 'PIQUE Collective',
    category: 'Commercial',
    year: '2026',
    layout: 'landscape',
    whiteText: true,
    outerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/card-pique-landscape-286221_LVlHsP7Uf.jpg?tr=w-1600,h-980,q-90',
    innerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/pique-1126345_N2jzcu8Sc.jpg?tr=w-1200,h-700,q-90',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/card-pique-landscape-286221_LVlHsP7Uf.jpg',
    secondaryImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/pique-landscape-1-297727_vVizzI6aI.jpg?tr=w-940,h-580,dpr-2,f-webp,q-80',
    websiteUrl: 'https://pique.com.au',
    description: 'A revolutionary modular architecture platform combining high-performance engineering, interactive spatial design, and seamless customer journeys.',
    heroHeadline: 'Redefining modular luxury architecture for the next generation.',
    summary: 'We partnered with PIQUE to rethink digital architectural presentation from the ground up, delivering an editorial digital experience that celebrates modern craftsmanship and sustainable living.',
    paragraphs: [
      'PIQUE is a leading manufacturer of prefabricated, premium modular homes, designed for people living in challenging and remote locations.',
      'The website was to play a vital role in the launch campaign for PIQUE, needing to simultaneously evoke the brands premium cues whilst ensuring vital product information around specifications and build process was highly accessible.',
      "The answer lied in a content rich experience that balanced both form and function in equal measures. A sophisticated browsing experience with elegant UI production techniques mirrored the quality and craftsmanship of the product suite, supported by clear technical information and CTA's to drive consumer consideration and in-bound enquiry.",
      'The outcome was an industry award winning website that exceeded its business objectives and positioned the brand as a leader in the modular home sector.'
    ],
    tags: ['Commercial', 'UI & UX', 'Architecture', 'Design System', 'Next.js'],
    accentColor: '#38bdf8',
    awards: ['AWA 2026 Best in Show: Design', 'Awwwards Site of the Day', 'FWA of the Day'],
    stats: [
      { label: 'Inquiry Growth', value: '+142%' },
      { label: 'Avg Session Duration', value: '4m 18s' },
      { label: 'Page Load Speed', value: '0.42s' }
    ],
    scope: ['Brand Identity & Strategy', 'UI/UX Design', 'Interactive Architecture Models', 'Next.js Frontend'],
    testimonial: {
      quote: 'Wahid Solutions transformed our digital presence into a living piece of digital art. The reaction from our customers and critics worldwide has been extraordinary.',
      author: 'Elena Vance',
      role: 'Creative Director, PIQUE'
    }
  },
  {
    id: 'fair-go-finance',
    slug: 'fair-go-finance',
    title: 'Fair Go Finance',
    client: 'Fair Go Finance',
    category: 'Commercial',
    year: '2025',
    layout: 'portrait',
    whiteText: false,
    outerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/background-2-692501_RjtQ4Wp59.png?tr=w-932,h-1402,q-90',
    innerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/mob-2-692502_DXpSlqp7c.png?tr=w-500,h-1000,q-90',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/background-2-692501_RjtQ4Wp59.png',
    secondaryImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/mob-2-692502_DXpSlqp7c.png',
    websiteUrl: 'https://fairgofinance.com.au',
    description: 'Empowering Australians with transparent, accessible digital financial solutions and streamlined personal loan approvals.',
    heroHeadline: 'Fair, transparent and fast credit decisions powered by human-centered UX.',
    summary: 'Fair Go Finance is an innovative digital lender helping everyday Australians access responsible credit through transparent rates and friendly, frictionless online experiences.',
    paragraphs: [
      "We reimagined Fair Go Finance's digital loan application pipeline, reducing completion friction and prioritizing clarity at every calculation step.",
      "The updated experience resulted in a 42% increase in application completion rates and industry-leading customer satisfaction."
    ],
    tags: ['Commercial', 'Innovation', 'UI & UX', 'Fintech Lending', 'Design System'],
    accentColor: '#eab308',
    stats: [
      { label: 'Approval Speed', value: '<3 mins' },
      { label: 'Loan Volume Processed', value: '$350M+' },
      { label: 'Repeat Customers', value: '74%' }
    ],
    scope: ['Fintech Onboarding Flow', 'Design Systems', 'Micro-interactions', 'Performance Engineering']
  },
  {
    id: 'ferox',
    slug: 'ferox',
    title: 'Ferox',
    client: 'Ferox Advanced Technology',
    category: 'Innovation',
    year: '2025',
    layout: 'portrait',
    whiteText: true,
    outerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/ferox-outer-267439_sMd4XOTi0.jpg?tr=w-932,h-1402,q-90',
    innerImage: '',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/ferox-outer-267439_sMd4XOTi0.jpg',
    websiteUrl: 'https://ferox.com',
    description: 'Autonomous off-road all-terrain robotic platforms engineered for extreme environments and industrial exploration.',
    heroHeadline: 'Autonomous hardware engineering meeting rugged environmental robotics.',
    summary: 'Ferox designs groundbreaking deep-tech all-terrain vehicles equipped with autonomous LiDAR navigation and fluid-driven powertrains.',
    paragraphs: [
      "We crafted an arresting digital flagship showcasing Ferox's rugged robotic capabilities to international defense and industrial logistics clients.",
      "With high-fidelity 3D model viewers and visceral sound design, the site captures the raw technological power of Ferox vehicles."
    ],
    tags: ['Innovation', 'UI & UX', 'Next-Gen Robotics', 'Startups', 'WebGL'],
    accentColor: '#ef4444',
    stats: [
      { label: 'Terrain Capability', value: '100% Extreme' },
      { label: 'Industrial Deployments', value: '45+' },
      { label: 'R&D Patents', value: '18 Filed' }
    ],
    scope: ['Industrial Robotics UX', '3D Vehicle Viewer', 'Investor Pitch Experience', 'Next.js Frontend']
  },
  {
    id: 'fluidity',
    slug: 'fluidity',
    title: 'Fluidity',
    client: 'Fluidity Capital',
    category: 'Innovation',
    year: '2025',
    layout: 'landscape',
    whiteText: true,
    outerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/card-landscape-1076635_a4cVfiXpy.jpg?tr=w-1600,h-980,q-90',
    innerImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/inner-2-1076639_cvPEbLjFv.jpg?tr=w-1200,h-700,q-90',
    videoUrl: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/inner-2-1076639_cvPEbLjFv.jpg',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/card-landscape-1076635_a4cVfiXpy.jpg',
    secondaryImage: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/inner-2-1076639_cvPEbLjFv.jpg',
    websiteUrl: 'https://fluidity.money',
    description: 'A yield-generating decentralized finance protocol reimagining fluid liquidity pools with playful gamified rewards.',
    heroHeadline: 'Gamified decentralized liquidity mechanics for high-yield digital assets.',
    summary: 'Fluidity reimagines spend-and-earn mechanics in Web3 finance, rewarding daily transaction activity with instant randomized yield bonuses.',
    paragraphs: [
      "We designed and developed Fluidity's responsive web experience and interactive dashboard, making esoteric decentralized finance concepts accessible and exciting.",
      "The result was over $120M in Total Value Locked within 90 days of launch."
    ],
    tags: ['Innovation', 'Commercial', 'UI & UX', 'DeFi Protocol', 'Next.js'],
    accentColor: '#06b6d4',
    stats: [
      { label: 'Total Value Locked', value: '$120M+' },
      { label: 'Active Wallets', value: '88,000+' },
      { label: 'Smart Contract Audits', value: '4 Completed' }
    ],
    scope: ['Web3 Protocol Interface', 'Gamified Rewards Engine', 'DeFi Analytics Dashboard', 'Next.js Platform']
  }
];

export const allWorkCategories = [
  'Featured',
  'Commercial',
  'Community & Purpose',
  'Education',
  'Innovation',
  'Not for Profit',
  'UI & UX',
];
