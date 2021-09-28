import { useState } from 'react';
import { parseMultipleClassNames } from 'utils/theme/styleUtils';

import styles from './HamburgerButton.module.css';

type HamburgerButtonProps = { onClick?: () => void };
const HamburgerButton = ({ onClick }: HamburgerButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    onClick?.();
    setIsActive((prevState) => !prevState);
  };

  return (
    <div className={isActive ? parseMultipleClassNames([styles.hamburgerButton, styles.active]) : styles.hamburgerButton} onClick={handleClick}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
};

export default HamburgerButton;
