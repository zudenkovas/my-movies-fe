import { NavLink } from 'react-router-dom';
import Button from 'components/Button';
import { RouteKey } from 'navigation';
import { useProfile } from 'providers/ProfileProvider';

import styles from './Auth.module.css';

export const Auth = (): JSX.Element => {
  const { isLoggedIn, signOut } = useProfile();

  return isLoggedIn ? (
    <Button onClick={signOut}>Sign out</Button>
  ) : (
    <NavLink className={styles.link} to={RouteKey.SignIn}>
      <Button>Sign in</Button>
    </NavLink>
  );
};
