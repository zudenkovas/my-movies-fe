import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMovie } from 'api/movies/moviesLib';
import Loader from 'components/Loader';

import styles from './MoviePage.module.css';

export const MoviePage = (): JSX.Element => {
  const location = useLocation();
  const params = useParams<{ id: string }>();
  const { data, isLoading } = useQuery('movie', () => getMovie(params.id));

  if (isLoading && !data) {
    <Loader />;
  }

  console.log(location, params, data);

  return (
    <div className={styles.backdropImage} style={{ backgroundImage: `url(${data?.backdropPath})` }}>
      <div className={styles.backdropCover}>
        <div className={styles.movieInfoWrapper}>
          <section className={styles.movieSection}>
            <div className={styles.moviePosterWrapper}>
              <img className={styles.moviePoster} src={data?.posterPath} />
            </div>

            <div className={styles.movieDataWrapper}>
              <h2>{data?.title}</h2>I am the movie
            </div>
          </section>
        </div>
      </div>

      {/* <img className={styles.backdropImage} src={data?.backdropPath} /> */}
    </div>
  );
};
