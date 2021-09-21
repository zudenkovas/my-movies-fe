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
    <main className={styles.main}>
      {sidebar}
      {children}
    </main>
    {footer}
  </>
);

export default Layout;
