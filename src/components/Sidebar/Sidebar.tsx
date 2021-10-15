import { MouseEvent, ReactChild } from 'react';

import styles from './Sidebar.module.css';

type SidebarProps = {
  isFixed?: boolean;
  onBackDropClick?: () => void;
  children: ReactChild;
};

const Sidebar = ({ children, isFixed = true, onBackDropClick }: SidebarProps): JSX.Element => {
  const onSidebarClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className={isFixed ? styles.fixedSidebarWrapper : styles.takeOverSidebarWrapper} onClick={onBackDropClick}>
      <div className={isFixed ? styles.fixedSidebar : styles.takeOverSidebar} onClick={onSidebarClick}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
