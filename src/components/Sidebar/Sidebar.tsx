import { MouseEvent } from 'react';

import SidebarNavElement from './SidebarNavElement/SidebarNavElement';
import styles from './Sidebar.module.css';

type SidebarProps = {
  isFixed?: boolean;
  onBackDropClick?: () => void;
};

const Sidebar = ({ isFixed = true, onBackDropClick }: SidebarProps) => {
  const onSidebarClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className={isFixed ? styles.fixedSidebarWrapper : styles.takeOverSidebarWrapper} onClick={onBackDropClick}>
      <div className={isFixed ? styles.fixedSidebar : styles.takeOverSidebar} onClick={onSidebarClick}>
        <SidebarNavElement text="1st link" />
        <SidebarNavElement text="2nd link" />
      </div>
    </div>
  );
};

export default Sidebar;
