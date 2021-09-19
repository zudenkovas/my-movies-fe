import logo from '../assets/logo.svg';
import styles from './LogoIcon.module.css';

const LogoIcon = (): JSX.Element => <img alt="logo" className={styles.appLogo} src={logo} />;

export default LogoIcon;
