import { FC, useEffect, useState } from 'react';

import { FiltersSidebar, Navbar } from '@components';

import { classNameCreator } from '@utils';
import { useWindowSize } from '@hooks';

import './styles.scss';

interface LayoutProps {
  children: React.ReactNode;
  showFiltersSidebar?: boolean;
}

export const Layout: FC<LayoutProps> = ({ children, showFiltersSidebar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const viewportSize = useWindowSize()[0];

  const layoutWrapperClassname = classNameCreator([
    'layout__wrapper',
    showFiltersSidebar ? 'layout__wrapper--withSidebar' : '',
  ]);

  const filtersSidebarClassname = classNameCreator([
    'layout__filtersSidebar',
    isMenuOpen ? 'layout__filtersSidebar--open' : '',
  ]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // i want this effect to run only when the menu is open and the viewport is mobile
  useEffect(() => {
    const isMobile = viewportSize <= 699;
    if (isMenuOpen && isMobile) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen, viewportSize]);

  return (
    <div className="layout">
      <Navbar isMenuOpen={isMenuOpen} showMenu={showFiltersSidebar} toggleMenu={toggleMenu} />

      <div className={layoutWrapperClassname}>
        {showFiltersSidebar || isMenuOpen ? (
          <div className={filtersSidebarClassname}>
            <FiltersSidebar toggleMenu={toggleMenu} />
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
};
