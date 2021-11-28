import { HearthPlus } from 'components/Icons';

import styles from './Favorite.module.css';

type FavoriteProps = {
  id?: string;
  onClick: () => void;
};

const Favorite = ({ onClick }: FavoriteProps): JSX.Element => {
  return (
    <span className={styles.container} onClick={onClick}>
      <HearthPlus />
    </span>
  );
};

export default Favorite;
