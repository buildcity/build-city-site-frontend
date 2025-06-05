export interface Partner {
  name: string;
  description: string;
  image: string;
  link: string;
}

export const partners: Partner[] = [
  {
    name: "Venture Miner", 
    description:
      "VentureMiner integrates Web3 and AI technologies to unlock new possibilities for your business.",
    image: "/partner_assets/Venture_Miner_logo.webp",
    link: "https://ventureminer.com",
  },
  {
    name: "Windsurf",
    description:
      "Windsurf is an AI-powered IDE that revolutionizes software development with intelligent code completion, automated debugging, and seamless collaboration features.",
    image: "https://windsurf.com/logo/windsurf-white-symbol.svg",
    link: "https://codeium.com/windsurf",
  },
  {
    name: "University of Buffalo SUNY",
    description:
      "The University at Buffalo is a premier research university and the largest public university in New York, known for excellence in engineering, computer science, and innovation.",
    image: "https://www.buffalo.edu/content/www/brand/identity/UB-visual-identity-system/jcr:content/par/image_1636653355.img.1360.auto.q65.jpg/1730125612008.jpg",
    link: "https://www.buffalo.edu",
  },
];

export const FALLBACK_IMAGE = "/partner_assets/placeholder-logo.png";
