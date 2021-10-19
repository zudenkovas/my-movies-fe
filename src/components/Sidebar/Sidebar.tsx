import { MouseEvent, ReactChild } from 'react';

import styles from './Sidebar.module.css';

type SidebarProps = {
  onBackDropClick?: () => void;
  children: ReactChild;
};

const Sidebar = ({ children, onBackDropClick }: SidebarProps): JSX.Element => {
  const onSidebarClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.takeOverSidebarWrapper} onClick={onBackDropClick}>
      <div className={styles.takeOverSidebar} onClick={onSidebarClick}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
