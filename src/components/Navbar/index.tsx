import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Close from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import GalleryExplorerLogo from '@assets/images/logo.png';

import './styles.scss';

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  showMenu?: boolean;
}

export const Navbar: FC<NavbarProps> = ({ isMenuOpen, toggleMenu, showMenu }) => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/');
  };

  return (
    <div className="navbar">
      <button className="navbar__logoContainer" onClick={redirectToHome}>
        <img src={GalleryExplorerLogo} alt="icon logo" className="navbar__logoContainer--logo" />
        <h2 className="navbar__logoContainer--name">Gallery Explorer</h2>
      </button>

      {showMenu ? (
        <button className="navbar__menuButton" onClick={toggleMenu}>
          {isMenuOpen ? <Close /> : <MenuIcon />}
        </button>
      ) : null}
    </div>
  );
};
