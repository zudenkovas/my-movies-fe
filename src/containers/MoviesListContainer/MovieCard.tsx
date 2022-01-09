import { Link, generatePath } from 'react-router-dom';
import { useMutation } from 'react-query';
import { Movie } from 'api/movies';
import { postPersonalMovie, deletePersonalMovie } from 'api/personalMovies';
import Favorite from 'components/Favorite';
import { StarIcon } from 'components/Icons';
import { RouteKey } from 'navigation';
import { useProfile } from 'providers/ProfileProvider';

import styles from './MovieCard.module.css';

type MovieCardProps = {
  myMoviesIds?: { movieId: number; _id: string | undefined }[];
  movie: Movie;
  onFavoriteClick?: () => void;
};

const MovieCard = ({ movie, myMoviesIds, onFavoriteClick }: MovieCardProps): JSX.Element => {
  const { _id, posterPath, releaseDate, title, voteAverage, movieId } = movie;
  const { mutate: addPersonalMovie } = useMutation(postPersonalMovie, { onSuccess: onFavoriteClick });
  const { mutate: removePersonalMovie } = useMutation(deletePersonalMovie, { onSuccess: onFavoriteClick });
  const movieLink = generatePath(RouteKey.Movie, { id: `${movieId}` });
  const myMovieId = _id || myMoviesIds?.find((myMovieId) => myMovieId.movieId === movieId)?._id;
  const { isLoggedIn } = useProfile();

  const handleMovieAction = async () => {
    myMovieId ? await removePersonalMovie(myMovieId) : await addPersonalMovie(movie);
  };

  return (
    <div className={styles.movieCardWrapper}>
      <Link to={movieLink}>
        <img alt={`${title}-movie-poster`} className={styles.movieImage} loading="lazy" src={posterPath} />
      </Link>
      <div className={styles.movieInfoWrapper}>
        <div>
          <p className={styles.movieInfoParagraph}>
            <StarIcon className={styles.ratingIcon} />
            <span className={styles.voteAverage}>{voteAverage}</span>
          </p>
          <p>
            <span className={styles.filmTitle}>{title}</span>
          </p>
        </div>
        <p className={styles.releaseDate}>
          <span>{releaseDate}</span>
          {isLoggedIn && <Favorite id={myMovieId} onClick={handleMovieAction} />}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
