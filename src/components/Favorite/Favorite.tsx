import { HearthPlus, HeartMinus } from 'components/Icons';

import styles from './Favorite.module.css';

type FavoriteProps = {
  id?: string;
  onClick: () => void;
};

const Favorite = ({ id, onClick }: FavoriteProps): JSX.Element => {
  return (
    <span className={styles.container} onClick={onClick}>
      {id ? <HeartMinus /> : <HearthPlus />}
    </span>
  );
};

export default Favorite;
