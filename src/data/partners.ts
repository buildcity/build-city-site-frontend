export interface Partner {
  name: string;
  description: string;
  image: string;
  link: string;
}

export const partners: Partner[] = [
  {
    name: "Celo",
    description:
      "Celo is a carbon-negative blockchain platform bringing accessible and affordable decentralized finance (DeFi) to mobile users worldwide.",
    image: "/partner_assets/CeloLogo.jpg",
    link: "https://celo.org",
  },
  {
    name: "Venture Miner", 
    description:
      "VentureMiner integrates Web3 and AI technologies to unlock new possibilities for your business.",
    image: "/partner_assets/Venture_Miner_logo.webp",
    link: "https://ventureminer.com",
  },
  {
    name: "Near Protocol",
    description:
      "NEAR Protocol is a high-performance, carbon-neutral blockchain platform designed to be fast, secure, and infinitely scalable, enabling developers to build decentralized applications with ease.",
    image: "/partner_assets/near_logo.png",
    link: "https://near.org",
  },
];

export const FALLBACK_IMAGE = "/partner_assets/placeholder-logo.png";
