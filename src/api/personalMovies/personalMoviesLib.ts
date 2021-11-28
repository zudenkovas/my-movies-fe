import { Movie, MoviesResponse } from 'api/movies';

import { get, getSecurityHeaders, post } from '../shared/methods';

export async function getPersonalMovies(): Promise<MoviesResponse> {
  const { data } = await get<MoviesResponse>('personal-movies', getSecurityHeaders());
  return data;
}

export async function postPersonalMovie(movie: Movie): Promise<Movie> {
  const { data } = await post<Movie, Movie>('personal-movies', movie);
  return data;
}
