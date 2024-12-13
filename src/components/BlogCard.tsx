import React from 'react';
import { format } from 'date-fns';
import Card from './common/Card';

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
  const AuthorMetadata = () => (
    <div className="flex items-center">
      <img
        src={post.author.avatar}
        alt={post.author.name}
        className="w-8 h-8 rounded-full mr-3"
      />
      <div>
        <p className="text-white text-sm font-medium">{post.author.name}</p>
        <p className="text-gray-400 text-xs">
          {format(new Date(post.date), 'MMM d, yyyy')}
        </p>
      </div>
    </div>
  );

  return (
    <Card
      title={post.title}
      description={post.excerpt}
      imageUrl={post.author.avatar}
      link={post.mediumUrl}
      tags={post.tags}
      metadata={<AuthorMetadata />}
    />
  );
};

export default BlogCard;