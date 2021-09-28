import { parseMultipleClassNames } from 'utils/theme/styleUtils';

import styles from './HamburgerButton.module.css';

type HamburgerButtonProps = { onClick?: () => void };
const HamburgerButton = ({ onClick }: HamburgerButtonProps) => {
  // TODO: Update element to change kebab button state on click
  const handleClick = () => {
    onClick?.();
  };

  return (
    <div className={parseMultipleClassNames([styles.hamburgerButton, styles.active])} onClick={handleClick}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
};

export default HamburgerButton;
