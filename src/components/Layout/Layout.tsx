import { ReactNode } from 'react';
import { parseMultipleClassNames } from 'utils/theme/styleUtils';

import styles from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
};

const Layout = ({ children, header, footer }: LayoutProps): JSX.Element => (
  <div className={styles.contentWrapper}>
    <div className={parseMultipleClassNames([styles.contentMargin, styles.stickyContainer])}>{header}</div>
    <div className={parseMultipleClassNames([styles.mainContent, styles.contentMargin])}>
      <main>{children}</main>
    </div>
    <div className={styles.contentMargin}>{footer}</div>
  </div>
);

export default Layout;
