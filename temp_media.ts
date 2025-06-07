import { Media } from '../components/MediaCard';

export const mediaItems: Media[] = [
  {
    id: '1',
    title: 'AI2Web3Bootcamp NYC',
    description: 'Introduction to decentralized AI agents development.',
    imageUrl: '/project_assets/ai2web3bootcamp_banner.png',
    url: 'https://youtube.com/playlist?list=PLWXOnn4W7PGD-ij_AmzdS1r1hUIz1MXj1&si=g0GUZdUdxgHlfGiG',
    type: 'youtube',
    tags: ['Education', 'AI', 'Web3', 'YouTube'],
    youtubeVideoId: 'PLWXOnn4W7PGD-ij_AmzdS1r1hUIz1MXj1'
  },
  {
    id: '2',
    title: 'Founders talk w/ Byte Ai',
    description: 'A casual conversation with a Build City Founder',
    imageUrl: '/media_assets/buildcitybyte.png',
    url: 'https://x.com/i/spaces/1dRJZYzdZzMGB',
    type: 'twitter',
    tags: ['twitterspaces', 'ByteAI', 'AIAgents', 'Entrepreneurship', 'FoodTech'],
    twitterSpacesId: '1dRJZYzdZzMGB'
  },
  {
    id: '3',
    title: 'Coindesk article on Build City Ai2Web3 Bootcamp',
    description: 'The combination of AI and Web3 could turn us all into developers',
    imageUrl: '/media_assets/Coindeskarticleimage.png',
    url: 'https://www.coindesk.com/opinion/2025/01/24/it-s-easier-than-you-think-to-build-with-ai-and-web3',
    type: 'article',
    tags: ['AI2Web3', 'CoinDesk', 'Web3Education'],
    articlePreview: 'The convergence of artificial intelligence and Web3 technologies is creating unprecedented opportunities for developers and creators alike. This article explores how the barrier to entry for building sophisticated applications is rapidly lowering, thanks to AI-powered development tools and decentralized infrastructure.'
  },
  {
    id: '4',
    title: 'A casual conversation on Vibe Coding ',
    description: 'Vibe Coding trends with CryptoFede',
    imageUrl: '/media_assets/casual conversation on vibe coding.png',
    url: 'https://x.com/i/spaces/1BdxYqgYkELxX',
    type: 'twitter',
    tags: ['VibeCoding', 'CryptoFede', 'BuildCityTalks'],
    twitterSpacesId: '1BdxYqgYkELxX'
  },
  {
    id: '5',
    title: 'How to use ai agents and tools to promote a brand',
    description: 'We work with Yonkers Arts to create personalized social agents',
    imageUrl: '/media_assets/yonkers arts image for site.png',
    url: 'https://x.com/i/spaces/1BdxYqgYkELxX/peek',
    type: 'twitter',
    tags: ['AIForCreatives', 'YonkersArts', 'BrandPromotion'],
    twitterSpacesId: '1BdxYqgYkELxX'
  }
];
