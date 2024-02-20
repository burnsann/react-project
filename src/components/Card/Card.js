import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import clsx from 'clsx';

const Card = (props) => {

  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    console.log("Clicked card id:", props.id);
    dispatch(toggleCardFavorite(props.id))
  };

  return (
    <li className={styles.card}>{props.title}
      <button onClick={handleToggleFavorite}>
        <i className={'fa fa-star-o'}></i>
      </button>
    </li>
  );
};

export default Card;

