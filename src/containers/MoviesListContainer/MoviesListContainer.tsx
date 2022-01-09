import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'api/movies';
import { getPersonalMovies } from 'api/personalMovies';
import { getGenres } from 'api/genres';
import { getSortOptions } from 'api/sortOptions';
import Loader from 'components/Loader';
import Pagination from 'components/Pagination';
import { useProfile } from 'providers/ProfileProvider';

import MovieCard from './MovieCard';
import styles from './MoviesListContainer.module.css';
import MoviesListFilter, { MovieListFilterFormValues } from './MoviesListFilter';

const filterParams = (params: MovieListFilterFormValues & { page: string }) =>
  Object.entries(params).reduce((acc: Record<string, string | string[]>, [key, value]: [string, string | string[]]) => {
    if (value) {
      acc[key] = value;
    }
    return acc;
  }, {});

const MoviesListContainer = (): JSX.Element => {
  const { isLoggedIn } = useProfile();
  const [searchParams, setSearchParams] = useSearchParams();
  const activePage = parseInt(searchParams.get('page') || '1');
  const movieFilter = { title: searchParams.get('title') || '', genres: searchParams.getAll('genres') || [], sort: searchParams.get('sort') || '' };

  const { data, isLoading, isFetching, refetch } = useQuery(['movies', activePage, movieFilter], () => getMovies(activePage, movieFilter));
  const {
    data: personalMovies,
    isLoading: loadingPersonalMovies,
    isFetching: fetchingPersonalMovies,
    refetch: refetchMyMovies,
  } = useQuery(['personal-movies'], getPersonalMovies, { enabled: isLoggedIn });

  const myMoviesIds = personalMovies?.movies.map((movie) => ({ movieId: movie.movieId, _id: movie._id }));
  const { data: genres, isLoading: loadingGenres } = useQuery(['genres'], getGenres);
  const { data: sortOptions, isLoading: loadingSortOptions } = useQuery(['sortOptions'], getSortOptions);

  const genreOptions = genres?.map((genre) => ({ label: genre.name, value: `${genre.id}` })) || [];
  const mappedSortOptions = sortOptions?.map((sortOption) => ({ label: sortOption.name, value: sortOption.code })) || [];
  const totalPages = data?.totalPages || 0;

  const handleNextClick = () => {
    const nextPage = activePage === totalPages ? activePage : activePage + 1;

    setSearchParams(filterParams({ ...movieFilter, page: `${nextPage}` }));
  };

  const handlePrevClick = () => {
    const nextPage = activePage === 1 ? activePage : activePage - 1;

    setSearchParams(filterParams({ ...movieFilter, page: `${nextPage}` }));
  };

  const handlePageClick = (page: number) => {
    setSearchParams(filterParams({ ...movieFilter, page: `${page}` }));
  };

  const handleMovieListFilter = (values: MovieListFilterFormValues) => {
    setSearchParams(filterParams({ ...values, page: '1' }));
  };

  const handleMovieListFilterReset = () => {
    setSearchParams({ page: `${activePage}` });
  };

  const handleMovieRefetch = () => {
    refetch();
    refetchMyMovies();
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
      <div style={{ marginBottom: 'auto' }}>
        <div className={styles.moviesListContainer}>
          {isLoading || isFetching || loadingGenres || loadingSortOptions || loadingPersonalMovies || fetchingPersonalMovies ? (
            <Loader />
          ) : (
            data?.movies.map((movie, index) => (
              <MovieCard key={`movie-${movie._id}-${index}`} movie={movie} myMoviesIds={myMoviesIds} onFavoriteClick={handleMovieRefetch} />
            ))
          )}
        </div>
      </div>
      <Pagination currentPage={activePage} totalPages={totalPages} onNextClick={handleNextClick} onPageClick={handlePageClick} onPrevClick={handlePrevClick} />
    </>
  );
};

export default MoviesListContainer;
