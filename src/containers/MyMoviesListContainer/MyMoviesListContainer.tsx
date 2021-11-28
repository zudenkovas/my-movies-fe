import { Navigate } from 'react-router';
import { useQuery } from 'react-query';
import { useProfile } from 'prividers/ProfileProvider';
import Loader from 'components/Loader';
import MovieCard from 'containers/MoviesListContainer/MovieCard';
import { getPersonalMovies } from 'api/personalMovies/personalMoviesLib';

import styles from '../MoviesListContainer/MoviesListContainer.module.css';

export const MyMoviesListContainer = (): JSX.Element => {
  const { isLoggedIn } = useProfile();
  const { data, isLoading, isFetching } = useQuery(['personal-movies'], getPersonalMovies);

  return isLoggedIn ? (
    <div className={styles.moviesListContainer}>
      {isLoading || isFetching ? <Loader /> : data?.movies.map((movie, index) => <MovieCard {...movie} key={`movie-${movie.id}-${index}`} />)}
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default MyMoviesListContainer;
