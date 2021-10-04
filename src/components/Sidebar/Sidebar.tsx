import { MouseEvent } from 'react';

import SidebarNavElement from './SidebarNavElement/SidebarNavElement';

//TODO Update this component to fulfill AC's

const Sidebar = () => {
  const onSidebarClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div>
      <div onClick={onSidebarClick}>
        <SidebarNavElement text="1st link" />
        <SidebarNavElement text="2nd link" />
      </div>
    </div>
  );
};

export default Sidebar;
