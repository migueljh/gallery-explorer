import { FC, useCallback, useEffect, useState } from 'react';

import { useAppSelector } from '@redux';
import { getGalleryService } from '@api';
import { Layout, MemoizedMediaHighlightCard as MediaHighlightCard, Pagination } from '@components';
import { GalleryImageFlatProps } from '@types';

import CircularProgress from '@mui/material/CircularProgress';

import './styles.scss';

export const ImageGallery: FC = () => {
  const [images, setImages] = useState<GalleryImageFlatProps[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const filters = useAppSelector((state) => state.filters);

  const fetchGalleryImages = useCallback(async () => {
    try {
      setLoading(true);

      const filterData = {
        section: filters.section,
        sort: filters.sort,
        window: filters.window,
        page: filters.page,
        showViral: filters.showViral,
      };

      const data = await getGalleryService(filterData);

      setImages(data);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchGalleryImages();
  }, [fetchGalleryImages]);

  if (error) {
    return <div>Something went wrong, {error.message}</div>;
  }

  return (
    <Layout showFiltersSidebar>
      {loading ? (
        <div className="imageGallery__loader">
          <CircularProgress />
        </div>
      ) : (
        <div className="imageGallery">
          <div className="imageGallery__paginationContainer">
            <Pagination />
          </div>
          <div className="imageGallery__gridThumbnail">
            {images && images.length > 0 ? (
              images.map((image) => {
                return (
                  <div key={image.id}>
                    <MediaHighlightCard {...image} />
                  </div>
                );
              })
            ) : (
              <p>Not images available</p>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};
