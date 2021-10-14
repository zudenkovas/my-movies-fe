import styles from './SidebarNavElement.module.css';

type SidebarNavElement = {
  to?: string;
  text: string;
};

const SidebarNavElement = ({ to = '#', text }: SidebarNavElement) => {
  return (
    <a className={styles.sidebarNavElement} href={to}>
      {text}
    </a>
  );
};

export default SidebarNavElement;
