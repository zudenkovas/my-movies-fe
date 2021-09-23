import styles from './HamburgerButton.module.css';

const HamburgerButton = () => {
  // TODO: Adjust the HamburgerButton to match the AC
  return (
    <div className={styles.hamburgerButton}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
};

export default HamburgerButton;
