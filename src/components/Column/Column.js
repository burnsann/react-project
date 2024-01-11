import styles from './Column.module.scss'

const Column = props => {
  return (
    <article className={styles.column}>
      <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h2>
    </article> 
    // ponawiam pytanie co do nazewnictwa argumentu/parametru, nie rozumiem do końca jak to ma działać, czym tu jest props?
  )
};

export default Column;