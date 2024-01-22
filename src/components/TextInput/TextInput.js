import styles from './TextInput.module.scss';

const TextInput = props => {
  return (
    <input className={styles.input} value={props.value} onChange={props.onChange} type="text" placeholder={props.placeholder}/>
  )
};

export default TextInput;