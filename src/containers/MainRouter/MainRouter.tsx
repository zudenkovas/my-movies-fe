import { Routes, Route } from 'react-router-dom';
import MoviesList from 'containers/MoviesList';
import MoviePage from 'containers/MoviePage';
import MyMoviesList from 'containers/MyMoviesList';

import { RouteKey } from '.';

export const MainRouter = (): JSX.Element => (
  <Routes>
    <Route element={<MyMoviesList />} path={RouteKey.MyMovies} />
    <Route element={<MoviePage />} path={RouteKey.Movie} />
    <Route element={<MoviesList />} path={RouteKey.Movies} />
    <Route element={<MoviesList />} path={RouteKey.Index} />
  </Routes>
);
