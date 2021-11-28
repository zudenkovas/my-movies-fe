import { Navigate } from 'react-router';
import { useProfile } from 'providers/ProfileProvider';

export const MyMoviesListContainer = (): JSX.Element => {
  const { isLoggedIn } = useProfile();

  return isLoggedIn ? <p>Under construction</p> : <Navigate to="/" />;
};

export default MyMoviesListContainer;
