import { useState } from 'react';
import LogoIcon from 'components/Icons/LogoIcon';
import HamburgerButton from 'components/HamburgerButton';
import Sidebar from 'components/Sidebar';
import useMediaQuery from 'hooks/useMediaQuery';

import styles from './Header.module.css';

// TODO: Fix this component to work properly

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const handleButtonClick = () => {
    setSidebarVisible((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  useMediaQuery({
    matchQuery: '(min-width: 400px)',
    matchCallback: closeSidebar,
  });

  return (
    <header className={styles.headerElement}>
      <LogoIcon />
      <span>My Movies</span>
      <div className={styles.hamburgerButtonWrapper}>
        <HamburgerButton isActive={sidebarVisible} onClick={handleButtonClick} />
      </div>
      {sidebarVisible && <Sidebar onBackDropClick={closeSidebar} />}
    </header>
  );
};

export default Header;
