export type MoviesResponse = {
  page: number;
  totalPages: number;
  movies: Movie[];
};

export type Movie = {
  id?: string;
  movieId: number;
  backdropPath: string;
  posterPath: string;
  releaseDate: string;
  title: string;
  voteAverage: number;
};

export type MovieDetails = Movie & {
  budget: number;
  genres: Genre[];
  homepage: string;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  productionCompanies: ProductionCompany[];
  productionCountries: ProductionCountry[];
  revenue: number;
  runtime: number;
  spokenLanguages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  voteCount: number;
};

type Genre = {
  id: number;
  name: string;
};

type ProductionCompany = {
  id: number;
  logoPath: string;
  name: string;
  originCountry: string;
};

type ProductionCountry = {
  iso: string;
  name: string;
};

type SpokenLanguage = {
  englishName: string;
  iso: string;
  name: string;
};

export type MovieFilter = {
  title?: string;
  genres?: string[];
  sort?: string;
};
