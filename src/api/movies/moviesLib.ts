import { MoviesResponse, MovieDetails } from './types';
import { get } from '../shared/methods';

export async function getMovies(page: number): Promise<MoviesResponse> {
  const { data } = await get<MoviesResponse>(`movies?page=${page}`);
  return data;
}

export async function getMovie(id: string): Promise<MovieDetails> {
  const { data } = await get<MovieDetails>(`movies/${id}`);
  return data;
}
