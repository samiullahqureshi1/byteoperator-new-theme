export interface NewsItem {
  id: string;
  category: string;
  date: string;
  title: string;
  subtitle: string;
  actionText: string;
  link: string;
  isExternal?: boolean;
  image: string;
  badgeBg?: string;
  hasAwardPills?: boolean;
}

export const newsItems: NewsItem[] = [
  {
    id: 'awa-2026',
    category: 'Awards',
    date: '10.06.26',
    title: 'Australian Web Awards 2026:',
    subtitle: '4 Wins including Best in Show: Design',
    actionText: 'Read more',
    link: '/about',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/AWA_DwQ-Vbbfk.jpg?tr=w-800,h-900,q-85',
    badgeBg: 'bg-[#5b3294]',
    hasAwardPills: true,
  },
  {
    id: 'trailswa-launch',
    category: 'App Launch',
    date: '04.06.26',
    title: 'TrailsWA Mobile App:',
    subtitle: 'New dedicated mobile app available on iOS and Android',
    actionText: 'Download the App',
    link: '/work/trailswa-mobile-app',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/Trails_9PhBitx6v.png?tr=w-800,h-900,q-85',
    badgeBg: 'bg-black/60',
  },
  {
    id: 'global-recognition',
    category: 'Awards',
    date: '08.05.26',
    title: 'Global Recognition:',
    subtitle: 'Two Byte Operator projects receive high honours',
    actionText: 'Read More',
    link: '/work',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/awardsfeed__8l_rzNIIP.jpg?tr=w-800,h-900,q-85',
    badgeBg: 'bg-black/60',
  },
  {
    id: 'pharmacy-777-launch',
    category: 'Site Launch',
    date: '18.03.26',
    title: 'Pharmacy 777:',
    subtitle: 'New website for national pharmacy brand',
    actionText: 'See Case Study',
    link: '/work/pharmacy-777',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/777_bDuM00m3i.jpg?tr=w-800,h-900,q-85',
    badgeBg: 'bg-[#0070ba]',
  },
  {
    id: 'marvell-launch',
    category: 'Site Launch',
    date: '23.02.26',
    title: 'Marvell Tile & Stone:',
    subtitle: 'Editorial experience for a unique architectural showroom',
    actionText: 'See Case Study',
    link: '/work/marvell-tile-and-stone',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/marvell-151597590572852_cPnui5D6u.jpg?tr=w-800,h-900,q-85',
    badgeBg: 'bg-black/60',
  },
  {
    id: 'xmas-25',
    category: 'Special',
    date: '24.12.25',
    title: "Xmas Card '25:",
    subtitle: 'Dreaming of a byte Christmas — our interactive audio-visual synth',
    actionText: 'Experience It',
    link: '/about',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/humaanpeople-285662_pF9EDkkSm.jpg?tr=w-800,h-900,q-85',
    badgeBg: 'bg-black/60',
  },
  {
    id: 'ahwaa',
    category: 'Site Launch',
    date: '27.11.25',
    title: 'AHWAA Security:',
    subtitle: 'An interactive security education tool to improve privacy practices',
    actionText: 'See Case Study',
    link: '/work',
    image: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/swglobelandscape-884732_Xc3fzGW06.jpg?tr=w-800,h-900,q-85',
    badgeBg: 'bg-black/60',
  }
];
