import { NavLink } from 'react-router-dom';
import { parseMultipleClassNames } from 'utils/theme/styleUtils';

import styles from './HeaderNavigation.module.css';

type HeaderNavigationProps = {
  navigationConfig: NavigationConfig[];
  listDirection?: 'row' | 'column';
};

type NavigationConfig = {
  to: string;
  name: string;
};

export const HeaderNavigation = ({ navigationConfig, listDirection }: HeaderNavigationProps) =>
  navigationConfig.length ? (
    <nav>
      <ul className={listDirection === 'row' ? parseMultipleClassNames([styles.unorderedList, styles.rowAlign]) : styles.unorderedList}>
        {navigationConfig.map((navItem, index) => (
          <li className={styles.listItem} key={index}>
            <NavLink activeClassName={styles.isActive} to={navItem.to}>
              {navItem.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  ) : null;