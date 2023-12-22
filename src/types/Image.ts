export interface ImageDetailsProps {
  id: string;
  title: string | undefined;
  type: string;
  views: number;
  link: string;
  description: string;
}

export interface ImageDetailsResponseProps {
  data: ImageDetailsProps;
  success: boolean;
  status: number;
}

export interface ImageProps {
  id: string;
  description: string | null;
  link: string;
  gifv?: string;
  type: string;
  mp4?: string;
  title?: string;
  comment_count?: number;
  views?: number;
  ups?: number;
  downs?: number;
  score?: number;
}

export interface LazyMediaProps {
  src: string;
  alt?: string;
  title?: string;
}
