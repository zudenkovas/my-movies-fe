import { Switch, Route } from 'react-router-dom';
import MoviesList from 'containers/MoviesList';
import MoviePage from 'containers/MoviePage';
import MyMoviesList from 'containers/MyMoviesList';

import { RouteKey } from '.';

export const MainRouter = () => (
  <Switch>
    <Route component={MyMoviesList} path={RouteKey.MyMovies} />
    <Route component={MoviePage} path={RouteKey.Movie} />
    <Route component={MoviesList} path={RouteKey.Movies} />
    <Route component={MoviesList} path={RouteKey.Index} />
  </Switch>
);
