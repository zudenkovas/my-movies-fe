import { parseMultipleClassNames } from 'utils/theme/styleUtils';

import styles from './HamburgerButton.module.css';

// TODO: Fix this component to work properly

type HamburgerButtonProps = { isActive: boolean; onClick?: () => void };
const HamburgerButton = ({ isActive, onClick }: HamburgerButtonProps) => {
  return (
    <div className={!isActive ? parseMultipleClassNames([styles.hamburgerButton, styles.active]) : styles.hamburgerButton} onClick={onClick}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
};

export default HamburgerButton;
