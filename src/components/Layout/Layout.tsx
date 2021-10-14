import { ReactNode } from 'react';
import { parseMultipleClassNames } from 'utils/theme/styleUtils';

import styles from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
};

const Layout = ({ children, header, footer }: LayoutProps) => (
  <>
    <div className={parseMultipleClassNames([styles.contentMargin, styles.stickyContainer])}>{header}</div>
    <div className={styles.contentMargin}>
      <main>{children}</main>
    </div>
    <div className={styles.contentMargin}>{footer}</div>
  </>
);

export default Layout;
