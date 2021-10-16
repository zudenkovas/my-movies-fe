import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/moviesLib';
import Loader from 'components/Loader';

import MovieCard from './MovieCard';
import styles from './MoviesList.module.css';

const MoviesListContainer = (): JSX.Element => {
  const { data, isLoading, isFetching } = useQuery('movies', getMovies);

  if (isLoading || isFetching) {
    return <Loader />;
  }

  return (
    <div className={styles.moviesListContainer}>
      {data?.movies.map((movie) => (
        <MovieCard {...movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MoviesListContainer;
