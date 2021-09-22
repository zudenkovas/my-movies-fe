import { ReactNode } from 'react';
import { parseMultipleClassNames } from 'utils/theme/styleUtils';

import styles from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
  sidebar?: ReactNode;
};

const Layout = ({ children, header, footer, sidebar }: LayoutProps) => (
  <>
    <div className={styles.contentMargin}>{header}</div>
    <div className={parseMultipleClassNames([styles.contentMargin, styles.contentContainer])}>
      <div className={styles.sideBar}>{sidebar}</div>
      <main>{children}</main>
    </div>
    <div className={styles.contentMargin}>{footer}</div>
  </>
);

export default Layout;
