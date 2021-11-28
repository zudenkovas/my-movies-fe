import { Movie, MoviesResponse } from 'api/movies';

import { deleteRequest, get, getSecurityHeaders, post } from '../shared/methods';
import { DeleteResponse } from './types';

export async function getPersonalMovies(): Promise<MoviesResponse> {
  const { data } = await get<MoviesResponse>('personal-movies', getSecurityHeaders());
  return data;
}

export async function postPersonalMovie(movie: Movie): Promise<Movie> {
  const { data } = await post<Movie, Movie>('personal-movies', movie, getSecurityHeaders());
  return data;
}

export async function deletePersonalMovie(id: string): Promise<DeleteResponse> {
  const { data } = await deleteRequest<DeleteResponse>(`personal-movies/${id}`, getSecurityHeaders());
  return data;
}
