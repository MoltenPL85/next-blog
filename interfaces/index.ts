export interface Post {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
  isFeatured: boolean;
  content?: string;
}

export interface Contact {
  id?: string;
  email: string;
  name: string;
  message: string;
}
