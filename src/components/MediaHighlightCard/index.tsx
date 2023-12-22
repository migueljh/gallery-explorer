import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { ImageProps } from '@types';
import { LazyVideo, StatItem } from '@components';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';

import './styles.scss';

const MediaHighlightCard: FC<ImageProps> = ({
  id,
  type,
  title,
  link,
  comment_count,
  ups,
  description,
  downs,
  score,
  views,
}) => {
  const navigate = useNavigate();

  const navigateToMediaDetails = () => {
    navigate(`/image/${id}`, { state: { title, description, ups, downs, score, views } });
  };

  const stats = [
    {
      IconComponent: CommentIcon,
      count: comment_count,
    },
    {
      IconComponent: ThumbUpIcon,
      count: ups,
    },
  ];

  return (
    <div className="mediaHighlightCard" onClick={navigateToMediaDetails}>
      <div className="mediaHighlightCard__container">
        <div className="mediaHighlightCard__imageContainer">
          {type && type.includes('video') ? (
            <LazyVideo src={link} title={title} />
          ) : (
            <img
              src={link}
              alt={title || 'Gallery image'}
              loading="lazy"
              className="mediaHighlightCard__imageContainer--image"
            />
          )}
        </div>
        <div className="mediaHighlightCard__infoContainer">
          <p className="mediaHighlightCard__infoContainer--title">{title}</p>
          <div className="mediaHighlightCard__infoContainer--stats">
            {stats.map(({ IconComponent, count }) => (
              <StatItem IconComponent={IconComponent} count={count} key={count} height="14px" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const MemoizedMediaHighlightCard = memo(MediaHighlightCard);
