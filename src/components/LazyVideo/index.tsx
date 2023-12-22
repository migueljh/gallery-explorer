import { FC, useEffect, useRef, useState } from 'react';

import { LazyMediaProps } from '@types';

export const LazyVideo: FC<LazyMediaProps> = ({ src, title }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentVideoRef = videoRef.current;
    const observer = new IntersectionObserver((entries) => {
      const [entrys] = entries;
      if (entrys.isIntersecting) {
        setLoaded(true);
        if (currentVideoRef) {
          observer.unobserve(currentVideoRef);
        }
      }
    });

    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);

  return (
    <div ref={videoRef}>
      {loaded && (
        <video
          draggable="false"
          playsInline
          autoPlay
          loop
          muted
          title={title}
          className="mediaHighlightCard__imageContainer--image"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      {!loaded && <div className="mediaHighlightCard__imageContainer--placeholder" />}
    </div>
  );
};
