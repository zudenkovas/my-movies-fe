import { NavLink } from 'react-router-dom';
import Button from 'components/Button';
import { RouteKey } from 'navigation';

import styles from './Auth.module.css';

export const Auth = (): JSX.Element => {
  return (
    <NavLink className={styles.link} to={RouteKey.SignIn}>
      <Button>Sign in</Button>
    </NavLink>
  );
};
