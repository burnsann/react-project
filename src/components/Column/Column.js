import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsRedux';

const Column = props => {

  /* const searchString = useSelector(state => state.searchString);
  const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id && card.title.toLowerCase().includes(searchString.toLowerCase()))); */
  const cards = useSelector(state => getFilteredCards(state, props.id));
  console.log('Column render');

  return (
    <article className={styles.column}>
      <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h2>

      <ul className={styles.cards}> 
        {cards.map(card => <Card key={card.id} title={card.title} id={card.id} isFavorite={card.isFavorite} />)} 
      </ul>
      
      <CardForm columnId={props.id} action={props.addCard} />  
    </article>
  )
};

export default Column;