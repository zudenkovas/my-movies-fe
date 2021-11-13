import { useState } from 'react';
import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/moviesLib';
import Loader from 'components/Loader';
import Pagination from 'components/Pagination';

import MovieCard from './MovieCard';
import styles from './MoviesListContainer.module.css';
import MovieListFilter, { MovieListFilterFormValues } from './MovieListFilter';

const MoviesListContainer = (): JSX.Element => {
  const [activePage, setActivePage] = useState(1);
  const [movieFilter, setMovieFilter] = useState({ title: '' });
  const { data, isLoading, isFetching } = useQuery(['movies', activePage, movieFilter], () => getMovies(activePage, movieFilter));

  const totalPages = data?.totalPages || 0;

  if (isLoading || isFetching) {
    return <Loader />;
  }

  const handleNextClick = () => {
    setActivePage((page: number) => (page === totalPages ? page : page + 1));
  };

  const handlePrevClick = () => {
    setActivePage((page: number) => (page === 1 ? page : page - 1));
  };

  const handlePageClick = (page: number) => {
    setActivePage(page);
  };

  const handleMovieListFilter = (values: MovieListFilterFormValues) => {
    setMovieFilter(values);
  };

  return (
    <>
      <MovieListFilter onFilterSubmit={handleMovieListFilter} />
      <div className={styles.moviesListContainer}>
        {data?.movies.map((movie, index) => (
          <MovieCard {...movie} key={`movie-${movie.id}-${index}`} />
        ))}
      </div>
      <Pagination currentPage={activePage} totalPages={totalPages} onNextClick={handleNextClick} onPageClick={handlePageClick} onPrevClick={handlePrevClick} />
    </>
  );
};

export default MoviesListContainer;
