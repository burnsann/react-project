import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard} from '../../redux/cardsRedux';
import clsx from 'clsx';

const Card = (props) => {

  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    console.log("Clicked card id:", props.id);
    dispatch(toggleCardFavorite(props.id))
  };

  const handleRemoveCard = () => {
    dispatch(removeCard(props.id))
  }

  return (
    <li className={styles.card}>{props.title}
      <div>
        <button className={styles.star} onClick={handleToggleFavorite}>
          <i className={clsx(props.isFavorite && styles.favorite, 'fa fa-star-o')}></i>
        </button>
        <button className={styles.trash} onClick={handleRemoveCard}>
          <i className={'fa fa-trash'}></i>
        </button>
        </div>
    </li>
  );
};

export default Card;

