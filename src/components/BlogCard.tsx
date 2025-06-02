import { format } from 'date-fns';
import { ExternalLink } from 'lucide-react';
import { componentStyles } from '../lib/styles';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  mediumUrl: string;
  tags: string[];
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <a 
      href={post.mediumUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={componentStyles.blogCard}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="text-white font-medium">{post.author.name}</p>
            <p className="text-gray-400 text-sm">
              {format(new Date(post.date), 'MMM d, yyyy')}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
          <ExternalLink className="h-5 w-5 text-gray-400" />
        </div>
        <p className="text-gray-400 mb-4">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className={componentStyles.tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default BlogCard;