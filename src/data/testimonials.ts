export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Wahid Solutions transformed our digital presence into a living piece of digital art. The reaction from our customers and critics worldwide has been extraordinary.",
    author: "Elena Vance",
    role: "Creative Director",
    company: "PIQUE Collective"
  },
  {
    quote: "The level of technical precision and aesthetic finesse Wahid Solutions brought to Sussex is peerless. They elevated our brand into a global design powerhouse.",
    author: "Marcus Sutherland",
    role: "Head of Brand",
    company: "Sussex Taps"
  },
  {
    quote: "Wahid Solutions turned terabytes of opaque data into one of the most vital investigative journalism tools of our decade.",
    author: "Dr. Aaron Meyer",
    role: "Lead Researcher",
    company: "Surveillance Watch"
  },
  {
    quote: "Working with Wahid Solutions felt like working with a high-calibre team that genuinely cares about every micro-interaction and pixel.",
    author: "Sophie Campbell",
    role: "Chief Digital Officer",
    company: "Pharmacy 777"
  }
];

export const awardsList = [
  { year: '2026', title: 'Australian Web Awards — Best in Show: Design', project: 'PIQUE' },
  { year: '2026', title: 'AWA Commercial Winner', project: 'Sussex Taps' },
  { year: '2026', title: 'Good Design Award Gold', project: 'TrailsWA App' },
  { year: '2025', title: 'Anthem Awards Gold — Human Rights Data', project: 'Exposing Surveillance' },
  { year: '2025', title: 'Awwwards Site of the Year Nominee', project: 'Marvell Stone' },
  { year: '2025', title: 'FWA of the Day', project: 'Chaleit Fintech' },
  { year: '2024', title: 'AWA Best in Show: Development', project: 'National Health Hub' },
];
