import { ImageDetailsProps, ImageDetailsResponseProps } from '@types';

import { imgurApiClient } from '@api';

export const getImageDetailsService = async (id: string): Promise<ImageDetailsProps> => {
  try {
    const response = await imgurApiClient.get<ImageDetailsResponseProps>(`/image/${id}`);

    const { title, type, views, link, description } = response.data.data;

    const imageDetails: ImageDetailsProps = {
      id, // this may be a bit redundant because I can get the id from the params but I like to have the interfaces as clean as possible
      title,
      type,
      views,
      link,
      description,
    };

    return imageDetails;
  } catch (error: any) {
    console.error('Error fetching image details:', error);
    throw new Error(error.message);
  }
};
