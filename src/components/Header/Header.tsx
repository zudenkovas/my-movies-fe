import LogoIcon from 'components/Icons/LogoIcon';
import HamburgerButton from 'components/HamburgerButton';

import styles from './Header.module.css';

const Header = () => {
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
