// Team member profiles data
export interface TeamProfile {
  name: string;
  description: string;
  image: string;
  link: string;
  role?: string;
}

export const teamProfiles: TeamProfile[] = [
  {
    name: 'Eddy P',
    description: 'An experienced and accomplished Data and AI engineer, earning Accenture over $50M in deals and leading development teams for Gen AI initiatives.',
    image: 'https://x.com/Eddgie_AI/photo',
    link: 'https://x.com/Eddgie_AI',
    role: 'Data & AI Engineer'
  },
  // Note: Removed placeholder profiles for public figures
  // Add actual team members here
];
