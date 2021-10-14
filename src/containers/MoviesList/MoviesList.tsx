import { useQuery } from 'react-query';

import { getMovies } from '../../api/movies/moviesLib';
import MovieCard from './MovieCard';
import styles from './MoviesList.module.css';

const MoviesListContainer = (): JSX.Element => {
  const { data, isLoading, error } = useQuery('movies', getMovies);

  console.log(isLoading, error);

  return (
    <div className={styles.moviesListContainer}>
      {data?.movies.map((movie) => (
        <MovieCard {...movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MoviesListContainer;
