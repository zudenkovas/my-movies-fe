import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMovie } from 'api/movies/moviesLib';
import Loader from 'components/Loader';
import Tag from 'components/Tag';

import styles from './MoviePage.module.css';

export const MoviePage = () => {
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
              <div className={styles.movieDataHeader}>
                <h2>
                  {data?.title} <span className={styles.movieDataHeaderDate}>{`(${data?.releaseDate})`}</span>
                </h2>

                <div className={styles.tagList}>
                  {data?.genres.map(({ id, name }) => (
                    <Tag key={id}>
                      <span>{name}</span>
                    </Tag>
                  ))}
                </div>

                <div className={styles.durationContainer}>
                  <span>Duration: </span> <strong>{data?.runtime} min</strong>
                </div>

                <div className={styles.voteContainer}>
                  <span>
                    Vote average: <strong>{data?.voteAverage} </strong>
                  </span>
                  <span>
                    Vote count: <strong>{data?.voteCount}</strong>
                  </span>
                </div>

                <div className={styles.overviewContainer}>
                  <h3>Overview</h3>
                  <span>{data?.overview}</span>
                </div>

                <div className={styles.overviewContainer}>
                  <h3>Production Companies</h3>
                  <span>{data?.productionCompanies.map((company) => company.name).join(', ')}</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* <img className={styles.backdropImage} src={data?.backdropPath} /> */}
    </div>
  );
};
