import LogoIcon from 'components/Icons/LogoIcon';
import HamburgerButton from 'components/HamburgerButton';
import useMediaQuery from 'hooks/useMediaQuery';

import styles from './Header.module.css';

// TODO: Update this component to

const Header = () => {
  useMediaQuery({
    matchQuery: '(min-width: 768px)',
    matchCallback: () => {
      return;
    },
  });

  return (
    <header className={styles.headerElement}>
      <LogoIcon />
      <span>My Movies</span>
      <div className={styles.hamburgerButtonWrapper}>
        <HamburgerButton />
      </div>
    </header>
  );
};

export default Header;
