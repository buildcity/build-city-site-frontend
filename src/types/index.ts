export interface BaseItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface Project extends BaseItem {
  githubUrl: string;
  demoUrl: string;
}

export interface Media extends BaseItem {
  url: string;
  type: string;
}

export interface BlogPost extends BaseItem {
  author: string;
  date: string;
  readTime: string;
  slug: string;
}
