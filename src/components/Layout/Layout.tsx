import { ReactNode } from 'react';

import styles from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
  sidebar?: ReactNode;
};

const Layout = ({ children, header, footer, sidebar }: LayoutProps) => (
  <>
    {header}
    <div className={styles.contentContainer}>
      <div className={styles.sideBar}>{sidebar}</div>
      <main>{children}</main>
    </div>
    {footer}
  </>
);

export default Layout;
