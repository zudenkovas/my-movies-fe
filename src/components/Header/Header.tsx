// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoIcon from 'components/Icons/LogoIcon';
// import HamburgerButton from 'components/HamburgerButton';
// import Sidebar from 'components/Sidebar';
import { RouteKey } from 'containers/MainRouter';
// import useMediaQuery from 'hooks/useMediaQuery';

// import { HeaderNavigation } from './HeaderNavigation';
import styles from './Header.module.css';

// const navigationConfig = [
//   { to: generatePath(RouteKey.Movies), name: 'Movies' },
//   {
//     to: generatePath(RouteKey.MyMovies),
//     name: 'My Movies',
//   },
// ];

const Header = (): JSX.Element => {
  // const [sidebarVisible, setSidebarVisible] = useState(false);
  // const handleButtonClick = () => {
  //   setSidebarVisible((prevState) => !prevState);
  // };

  // const closeSidebar = () => {
  //   setSidebarVisible(false);
  // };

  // const { matches } = useMediaQuery({
  //   matchQuery: '(min-width: 768px)',
  //   matchCallback: closeSidebar,
  // });

  return (
    <header className={styles.headerElement}>
      <NavLink to={RouteKey.Index}>
        <LogoIcon />
      </NavLink>
      {/* {matches ? (
        <HeaderNavigation listDirection="row" navigationConfig={navigationConfig} />
      ) : (
        <>
          <div className={styles.hamburgerButtonWrapper}>
            <HamburgerButton isActive={sidebarVisible} onClick={handleButtonClick} />
          </div>
          {sidebarVisible && (
            <Sidebar isFixed={false} onBackDropClick={closeSidebar}>
              <HeaderNavigation listDirection="column" navigationConfig={navigationConfig} />
            </Sidebar>
          )}
        </>
      )} */}
    </header>
  );
};

export default Header;
