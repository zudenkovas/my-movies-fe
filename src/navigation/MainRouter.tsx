import { Routes, Route } from 'react-router-dom';
import MoviesListContainer from 'containers/MoviesListContainer';
import MovieInfoContainer from 'containers/MovieInfoContainer';
import MyMoviesList from 'containers/MyMoviesListContainer';

import { RouteKey } from '.';

export const MainRouter = (): JSX.Element => (
  <Routes>
    <Route element={<MyMoviesList />} path={RouteKey.MyMovies} />
    <Route element={<MovieInfoContainer />} path={RouteKey.Movie} />
    <Route element={<MoviesListContainer />} path={RouteKey.Movies} />
    <Route element={<MoviesListContainer />} path={RouteKey.Index} />
  </Routes>
);
