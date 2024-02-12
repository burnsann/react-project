import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = props => {

  const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id));

  return (
    <article className={styles.column}>
      <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h2> {/*Nie do końca rozumiem, span z klasą fa fa- pokaże ikonę? */}

      <ul className={styles.cards}> 
        {cards.map(card => <Card key={card.id} title={card.title} />)} 
      </ul>
      
      <CardForm columnId={props.id} action={props.addCard} />  
    </article>
    // ponawiam pytanie co do nazewnictwa argumentu/parametru, nie rozumiem do końca jak to ma działać, czym tu jest props?
  )
};

export default Column;