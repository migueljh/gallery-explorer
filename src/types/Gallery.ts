import { ImageProps } from '.';

interface GalleryImageProps {
  comment_count: number;
  description: string;
  downs: number;
  images: ImageProps[];
  score: number;
  title: string;
  ups: number;
}

export interface GalleryParamsProps {
  page?: number;
  section?: GallerySection;
  showViral?: boolean;
  sort?: GallerySort;
  window?: GalleryWindow;
}

export interface GalleryResponseProps {
  data: GalleryImageProps[];
}

// props I expect to receive in the frontend after filter the data I need
export interface GalleryImageFlatProps {
  comment_count: number;
  description: string;
  downs: number;
  id: string;
  link: string;
  score: number;
  title: string;
  ups: number;
  type: string;
}

export enum GallerySection {
  Hot = 'hot',
  Top = 'top',
  User = 'user',
}

export enum GallerySort {
  Viral = 'viral',
  Top = 'top',
  Time = 'time',
  Rising = 'rising',
}

export enum GalleryWindow {
  Day = 'day',
  Week = 'week',
  Month = 'month',
  Year = 'year',
  All = 'all',
}
