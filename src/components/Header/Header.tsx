import LogoIcon from 'components/Icons/LogoIcon';
import HamburgerButton from 'components/HamburgerButton';

import styles from './Header.module.css';

const Header = () => {
  // TODO: Update element styles to hide/show the hamburger button
  return (
    <header className={styles.headerElement}>
      <LogoIcon />
      <span>My Movies</span>
      <div>
        <HamburgerButton />
      </div>
    </header>
  );
};

export default Header;
