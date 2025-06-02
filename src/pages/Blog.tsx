import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';
import { PageLayout, PageTitle } from '../components/PageLayout';
import { CardGrid } from '../components/Card';

const Blog = () => {
  return (
    <PageLayout>
      <PageTitle>Blog</PageTitle>
      <CardGrid>
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </CardGrid>
    </PageLayout>
  );
};

export default Blog;