import { FC } from 'react';

import './styles.scss';

interface FilterOptionProps {
  label: string;
  isSelected: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const FilterOption: FC<FilterOptionProps> = ({ label, onClick, isSelected, isDisabled = false }) => (
  <button
    className={`filterOption ${isSelected ? 'selected' : ''}`}
    onClick={onClick}
    disabled={isDisabled || isSelected}
  >
    {label}
  </button>
);
