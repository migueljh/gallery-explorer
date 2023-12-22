import {
  GalleryImageFlatProps,
  GalleryParamsProps,
  GalleryResponseProps,
  GallerySection,
  GallerySort,
  GalleryWindow,
} from '@types';

import { imgurApiClient } from '@api';

export const getGalleryService = async ({
  section = GallerySection.Hot,
  sort = GallerySort.Viral,
  window = GalleryWindow.Day,
  page = 0,
  showViral = false,
}: GalleryParamsProps): Promise<GalleryImageFlatProps[]> => {
  try {
    const response = await imgurApiClient.get<GalleryResponseProps>(
      `/gallery/${section}/${sort}/${window}/${page}?showViral=${showViral}`,
    );

    const galleryItems: GalleryImageFlatProps[] = response.data.data
      .filter((item) => item.images && item.images[0] && item.images[0].link)
      .map((item) => {
        const image = item.images[0];

        return {
          comment_count: item.comment_count,
          description: item.description,
          downs: item.downs,
          id: image.id,
          link: image.link,
          score: item.score,
          title: item.title,
          type: image.type,
          ups: item.ups,
        };
      });

    return galleryItems;
  } catch (error) {
    console.error('Error fetching gallery:', error);
    throw new Error('Failed to fetch gallery data');
  }
};
