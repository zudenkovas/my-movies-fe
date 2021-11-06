import { parseMultipleClassNames } from 'utils/theme/styleUtils';

import styles from './Button.module.css';

type ButtonProps = {
  children: JSX.Element | string;
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

const Button = ({ className, children, type = 'button', onClick }: ButtonProps): JSX.Element => (
  <button className={className ? parseMultipleClassNames([styles.button, className]) : styles.button} type={type} onClick={onClick}>
    {children}
  </button>
);

export default Button;
