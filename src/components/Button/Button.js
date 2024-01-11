import styles from './Button.module.scss';

const Button = props => {
  return (
    <button className={styles.button}>{props.children}</button> //Czy ja mogłam to nazwać text.text czy powinno to być nazwane np props.text, nie rozumiem składni.
  )
};

export default Button;