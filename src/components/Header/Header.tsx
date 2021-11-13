import { useEffect, useState } from 'react';
import { NavLink, generatePath, useLocation } from 'react-router-dom';
import LogoIcon from 'components/Icons/LogoIcon';
import HamburgerButton from 'components/HamburgerButton';
import Sidebar from 'components/Sidebar';
import { RouteKey } from 'navigation';
import useMediaQuery from 'hooks/useMediaQuery';

import { HeaderNavigation } from './HeaderNavigation';
import styles from './Header.module.css';

const navigationConfig = [{ to: generatePath(RouteKey.Movies), name: 'Movies' }];

const Header = (): JSX.Element => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const location = useLocation();
  const { matches } = useMediaQuery({
    matchQuery: '(min-width: 768px)',
  });

  useEffect(() => {
    if (!matches) {
      setSidebarVisible(false);
    }
  }, [matches]);

  useEffect(() => {
    setSidebarVisible(false);
  }, [location]);

  const handleButtonClick = () => {
    setSidebarVisible((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <header className={styles.headerElement}>
      <NavLink to={RouteKey.Index}>
        <LogoIcon />
      </NavLink>
      {matches ? (
        <HeaderNavigation listDirection="row" navigationConfig={navigationConfig} />
      ) : (
        <>
          <div className={styles.hamburgerButtonWrapper}>
            <HamburgerButton isActive={sidebarVisible} onClick={handleButtonClick} />
          </div>
          {sidebarVisible && (
            <Sidebar onBackDropClick={closeSidebar}>
              <HeaderNavigation listDirection="column" navigationConfig={navigationConfig} />
            </Sidebar>
          )}
        </>
      )}
    </header>
  );
};

export default Header;
