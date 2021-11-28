import { Link, generatePath } from 'react-router-dom';
import { Movie } from 'api/movies';
import Favorite from 'components/Favorite';
import { StarIcon } from 'components/Icons';
import { RouteKey } from 'navigation';

import styles from './MovieCard.module.css';

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps): JSX.Element => {
  const { _id, posterPath, releaseDate, title, voteAverage, movieId } = movie;
  const movieLink = generatePath(RouteKey.Movie, { id: `${movieId}` });

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
          <Favorite
            id={_id}
            onClick={() => {
              return;
            }}
          />
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
