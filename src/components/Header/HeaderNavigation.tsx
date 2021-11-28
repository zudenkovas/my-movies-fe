import { useProfile } from 'providers/ProfileProvider';
import { NavLink } from 'react-router-dom';
import { parseMultipleClassNames } from 'utils/theme/styleUtils';
import { LoginModal } from 'components/Modal';

import styles from './HeaderNavigation.module.css';

type HeaderNavigationProps = {
  navigationConfig: NavigationConfig[];
  listDirection?: 'row' | 'column';
};

type NavigationConfig = {
  to: string;
  name: string;
  private: boolean;
};

export const HeaderNavigation = ({ navigationConfig, listDirection }: HeaderNavigationProps): JSX.Element | null => {
  const { isLoggedIn } = useProfile();

  const menuItems = isLoggedIn ? navigationConfig : navigationConfig.filter((i) => !i.private);

  return navigationConfig.length ? (
    <nav>
      <ul className={listDirection === 'column' ? parseMultipleClassNames([styles.unorderedList, styles.columnAlign]) : styles.unorderedList}>
        {menuItems.map((navItem, index) => (
          <li className={styles.listItem} key={index}>
            <NavLink className={({ isActive }) => (isActive ? parseMultipleClassNames([styles.navLink, styles.isActive]) : styles.navLink)} to={navItem.to}>
              {navItem.name}
            </NavLink>
          </li>
        ))}
        <li className={styles.listItem}>
          <LoginModal />
        </li>
      </ul>
    </nav>
  ) : null;
};
