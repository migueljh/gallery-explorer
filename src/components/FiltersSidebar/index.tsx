import { FC } from 'react';

import { GallerySection, GallerySort, GalleryWindow } from '@types';

import { setSection, setShowViral, setSort, setWindow, useAppDispatch, useAppSelector } from '@redux';

import { FilterOption } from '@components';

import { Switch } from '@mui/material';

import './styles.scss';

type FilterOptionType = 'section' | 'sort' | 'window';

type Action<T = any> = (arg: T) => { type: string; payload: T };

interface FiltersSidebarProps {
  toggleMenu: () => void;
}

export const FiltersSidebar: FC<FiltersSidebarProps> = ({ toggleMenu }) => {
  const filters = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  const handleFilterChange = <T,>(action: Action<T>, arg: T) => {
    // this is to prevent the rising filter combination from being used with another non-user filter section, as specified in the API documentation https://apidocs.imgur.com/#eff60e84-5781-4c12-926a-208dc4c7cc94:~:text=viral%20%7C%20top%20%7C%20time%20%7C%20%7C%20rising%20(only%20available%20with%20user%20section).%20Defaults%20to%20viral
    if (action === setSection && filters.sort === GallerySort.Rising && arg !== GallerySection.User) {
      dispatch(setSort(GallerySort.Viral));
    }

    dispatch(action(arg));
    toggleMenu();
  };

  const handleShowViralChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setShowViral(event.target.checked));
  };

  const isOptionSelected = (optionType: FilterOptionType, optionValue: string) => {
    return filters[optionType] === optionValue;
  };

  return (
    <aside className="filtersSidebar">
      <div>
        <p>Section</p>
        <div className="filtersSidebar__row">
          {Object.values(GallerySection).map((section) => {
            const isSelected = isOptionSelected('section', section);
            return (
              <FilterOption
                key={section}
                label={section}
                onClick={() => handleFilterChange(setSection, section)}
                isSelected={isSelected}
              />
            );
          })}
        </div>
      </div>

      <div>
        <p>Sort</p>
        <div className="filtersSidebar__row">
          {Object.values(GallerySort).map((sort) => {
            const isSelected = isOptionSelected('sort', sort);
            const isDisabled = sort === GallerySort.Rising && filters.section !== GallerySection.User;
            return (
              <FilterOption
                key={sort}
                label={sort}
                onClick={() => handleFilterChange(setSort, sort)}
                isDisabled={isDisabled}
                isSelected={isSelected}
              />
            );
          })}
        </div>
      </div>

      <div>
        <p>Window</p>
        <div className="filtersSidebar__row">
          {Object.values(GalleryWindow).map((window) => {
            const isSelected = isOptionSelected('window', window);
            return (
              <FilterOption
                key={window}
                label={window}
                onClick={() => handleFilterChange(setWindow, window)}
                isSelected={isSelected}
              />
            );
          })}
        </div>
      </div>

      <div>
        <p>Show viral images</p>
        <Switch checked={filters.showViral} onChange={handleShowViralChange} color="success" />
      </div>
    </aside>
  );
};
