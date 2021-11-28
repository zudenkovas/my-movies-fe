import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'api/movies';
import { getGenres } from 'api/genres';
import { getSortOptions } from 'api/sortOptions';
import Loader from 'components/Loader';
import Pagination from 'components/Pagination';

import MovieCard from './MovieCard';
import styles from './MoviesListContainer.module.css';
import MoviesListFilter, { MovieListFilterFormValues } from './MoviesListFilter';

const MoviesListContainer = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePage = parseInt(searchParams.get('page') || '1');
  const movieFilter = { title: searchParams.get('title') || '', genres: searchParams.getAll('genres') || [], sort: searchParams.get('sort') || '' };

  const { data, isLoading, isFetching } = useQuery(['movies', activePage, movieFilter], () => getMovies(activePage, movieFilter));
  const { data: genres } = useQuery(['genres'], getGenres);
  const { data: sortOptions } = useQuery(['sortOptions'], getSortOptions);

  const genreOptions = genres?.map((genre) => ({ label: genre.name, value: `${genre.id}` })) || [];
  const mappedSortOptions = sortOptions?.map((sortOption) => ({ label: sortOption.name, value: sortOption.code })) || [];
  const totalPages = data?.totalPages || 0;

  const handleNextClick = () => {
    const nextPage = activePage === totalPages ? activePage : activePage + 1;

    setSearchParams({ ...movieFilter, page: `${nextPage}` });
  };

  const handlePrevClick = () => {
    const nextPage = activePage === 1 ? activePage : activePage - 1;

    setSearchParams({ ...movieFilter, page: `${nextPage}` });
  };

  const handlePageClick = (page: number) => {
    setSearchParams({ ...movieFilter, page: `${page}` });
  };

  const handleMovieListFilter = (values: MovieListFilterFormValues) => {
    setSearchParams({ ...values, page: '1' });
  };

  const handleMovieListFilterReset = () => {
    setSearchParams({ page: `${activePage}` });
  };

  return (
    <>
      <MoviesListFilter
        genreOptions={genreOptions}
        initialValues={movieFilter}
        sortOptions={mappedSortOptions}
        onFilterReset={handleMovieListFilterReset}
        onFilterSubmit={handleMovieListFilter}
      />
      <div className={styles.moviesListContainer}>
        {isLoading || isFetching ? <Loader /> : data?.movies.map((movie, index) => <MovieCard key={`movie-${movie._id}-${index}`} movie={movie} />)}
      </div>
      <Pagination currentPage={activePage} totalPages={totalPages} onNextClick={handleNextClick} onPageClick={handlePageClick} onPrevClick={handlePrevClick} />
    </>
  );
};

export default MoviesListContainer;
