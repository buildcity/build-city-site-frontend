export interface MembershipTier {
  name: string;
  subtitle: string;
  entryFee: number;
  monthlyFee: number;
  description: string;
  features: string[];
  buttonVariant: "outline" | "default";
  popular?: boolean;
}

export const membershipTiers: MembershipTier[] = [
  {
    name: "Starter Community",
    subtitle: "DIY Tier",
    entryFee: 0,
    monthlyFee: 49,
    description: "Perfect for individuals looking to join our community and access basic resources.",
    features: ["Community Access", "Basic Perks"],
    buttonVariant: "outline",
  },
  {
    name: "Prototype",
    subtitle: "DIY Tier",
    entryFee: 2000,
    monthlyFee: 499,
    description: "Ideal for those who want to build their project with guided support and resources.",
    features: ["Basic & Pro Perks", "Tech Stack Setup", "Video Lessons", "Ideation Support"],
    buttonVariant: "outline",
    popular: true,
  },
  {
    name: "MVP",
    subtitle: "Client Tier",
    entryFee: 5000,
    monthlyFee: 1999,
    description: "For startups ready to build their minimum viable product with expert guidance.",
    features: [
      "Tech Support",
      "Team Formation Support",
      "Product Feedback",
      "Investor Connections",
      "GTM Strategy Support",
    ],
    buttonVariant: "outline",
  },
  {
    name: "Scale",
    subtitle: "Client Tier",
    entryFee: 12000,
    monthlyFee: 4999,
    description: "Comprehensive support for startups ready to scale their business and operations.",
    features: ["CTO-as-a-Service", "Sales Pipeline & Automation", "Company Showcase", "Priority Investment"],
    buttonVariant: "default",
  },
];
