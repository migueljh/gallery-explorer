import { ElementType, FC } from 'react';

interface StatItemProps {
  IconComponent: ElementType;
  count: number | undefined;
  height?: string;
}

export const StatItem: FC<StatItemProps> = ({ IconComponent, count, height }) => (
  <span className="mediaHighlightCard__infoContainer--stats--item">
    {/* I add inline style because it's the only way I found at the moment to manipulate the size of the icons. */}
    <IconComponent style={{ height }} />
    {count}
  </span>
);
