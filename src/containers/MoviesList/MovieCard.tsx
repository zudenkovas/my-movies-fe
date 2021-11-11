import { Link, generatePath } from 'react-router-dom';
import { Movie } from 'api/movies/types';
import { StarIcon } from 'components/Icons';
import { RouteKey } from 'containers/MainRouter/routes';

import styles from './MovieCard.module.css';

const MovieCard = ({ posterPath, releaseDate, title, voteAverage, movieId }: Movie): JSX.Element => {
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
        <p className={styles.voteAverage}>
          <span>{releaseDate}</span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
