import { FC, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { getImageDetailsService } from '@api';

import { ImageDetailsProps } from '@types';

import { Layout, StatItem } from '@components';

import { CircularProgress } from '@mui/material';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import EyeIcon from '@mui/icons-material/RemoveRedEye';
import ScoreIcon from '@mui/icons-material/EmojiEvents';

import './styles.scss';

export const ImageDetails: FC = () => {
  const [imageDetails, setImageDetails] = useState<ImageDetailsProps>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const { title, description, ups, downs, score, views } = location.state || {};

  useEffect(() => {
    const fetchImageDetails = async () => {
      if (id) {
        try {
          setLoading(true);
          const data = await getImageDetailsService(id);
          setImageDetails(data);
        } catch (error: any) {
          setError(error);
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchImageDetails();
  }, [id]);

  const stats = [
    {
      IconComponent: ThumbUpIcon,
      count: ups,
    },
    {
      IconComponent: ThumbDownIcon,
      count: downs,
    },
    {
      IconComponent: EyeIcon,
      count: views,
    },
    {
      IconComponent: ScoreIcon,
      count: score,
    },
  ];

  if (loading) {
    return (
      <div className="loaderContainer">
        <CircularProgress />
      </div>
    );
  }

  if (!imageDetails) {
    return <div>No image details available.</div>;
  }

  if (error) {
    return <div>Something went wrong, {error.message}</div>;
  }

  return (
    <Layout>
      <div className="imageDetails">
        <h2 className="imageDetails__title">{title || imageDetails.title}</h2>
        {imageDetails.type && imageDetails.type.includes('video') ? (
          <video
            draggable="false"
            playsInline
            autoPlay
            loop
            muted
            title={imageDetails.title}
            className="imageDetails__media"
          >
            <source src={imageDetails.link} type="video/mp4" />
          </video>
        ) : (
          <div>
            <img src={imageDetails.link} alt="details of the cover" className="imageDetails__media" />
          </div>
        )}

        <div className="imageDetails__infoContainer">
          <div className="imageDetails__infoContainer--stats">
            {stats
              .filter((stat) => stat.count !== undefined)
              .map(({ IconComponent, count }) => (
                <StatItem key={count} IconComponent={IconComponent} count={count} height="20px" />
              ))}
          </div>
          <p className="imageDetails__infoContainer--description">{description || imageDetails.description}</p>
        </div>
      </div>
    </Layout>
  );
};
