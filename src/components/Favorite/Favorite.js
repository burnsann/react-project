import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCard } from '../../redux/cardsRedux';
import Card from '../Card/Card';

const Favorite = () => {

  const favoriteCards = useSelector(state => getFavoriteCard(state));

  return (
    <div className={styles.favorite}>
      <PageTitle>favorite</PageTitle>
      <p className={styles.subtitle}>Lorem ipsum</p>
      {favoriteCards.length > 0 ? (
        <ul className={styles.cardList}>
          {favoriteCards.map(card => (
            <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite} />
          ))}
        </ul>
      ) : (
        <p className={styles.emptyMessage}>You dont't have any favorite cards...</p>
      )}
    </div>
  );
};

export default Favorite;