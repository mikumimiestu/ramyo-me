export interface AnimeType {
  id: number;
  title: string;
  coverImage: string;
  type: string;
  year: number;
  rating?: number;
  isNew?: boolean;
  progress?: number;
  season?: number;
  episode?: number;
}

export interface NewsType {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  category: string;
  author: string;
}