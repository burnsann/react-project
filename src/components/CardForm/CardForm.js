import styles from './CardForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const CardForm = props => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    /* props.action({ title: title }, props.columnId); */
    dispatch({ type: 'ADD_CARD', payload: { title, columnId: props.columnId } });
    setTitle('');
  };


  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <Button>Add card</Button>
    </form>
    );
};

export default CardForm;