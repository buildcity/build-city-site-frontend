import { Project } from '../components/ProjectCard';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Web3 Wallet Integration',
    description: 'A comprehensive solution for integrating multiple web3 wallets into dApps',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/buildcity/web3-wallet',
    demoUrl: 'https://wallet.buildcity.dev',
    tags: ['Web3', 'TypeScript', 'React']
  },
  {
    id: '2',
    title: 'DeFi Dashboard',
    description: 'Real-time DeFi portfolio tracking and analytics platform',
    imageUrl: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/buildcity/defi-dashboard',
    demoUrl: 'https://defi.buildcity.dev',
    tags: ['DeFi', 'React', 'Web3']
  },
  {
    id: '3',
    title: 'NFT Marketplace',
    description: 'A decentralized marketplace for NFT trading and creation',
    imageUrl: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/buildcity/nft-marketplace',
    demoUrl: 'https://nft.buildcity.dev',
    tags: ['NFT', 'Solidity', 'React']
  }
];