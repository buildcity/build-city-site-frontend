import { BlogPost } from '../components/BlogCard';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web3 Development',
    excerpt: 'Exploring the latest trends and technologies in Web3 development',
    author: {
      name: 'Alex Rivera',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
    },
    date: '2024-03-15',
    mediumUrl: 'https://medium.com/buildcity/the-future-of-web3-development',
    tags: ['Web3', 'Development', 'Blockchain']
  },
  {
    id: '2',
    title: 'Building Scalable DeFi Applications',
    excerpt: 'Best practices for developing scalable decentralized finance applications',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100'
    },
    date: '2024-03-10',
    mediumUrl: 'https://medium.com/buildcity/building-scalable-defi-applications',
    tags: ['DeFi', 'Scalability', 'Architecture']
  },
  {
    id: '3',
    title: 'Smart Contract Security Best Practices',
    excerpt: 'Essential security considerations for smart contract development',
    author: {
      name: 'Michael Johnson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
    },
    date: '2024-03-05',
    mediumUrl: 'https://medium.com/buildcity/smart-contract-security-best-practices',
    tags: ['Security', 'Smart Contracts', 'Solidity']
  }
];