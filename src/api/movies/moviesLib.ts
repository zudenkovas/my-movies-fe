import axios from 'axios';

import { MoviesResponse, MovieDetails } from './types';

export async function getMovies(): Promise<MoviesResponse> {
  const { data } = await axios.get('http://localhost:3001/movies?page=1');
  return data;
}

export async function getMovie(id: string): Promise<MovieDetails> {
  const { data } = await axios.get(`http://localhost:3001/movies/${id}`);
  return data;
}
