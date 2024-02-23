import styles from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addList } from '../../redux/listsRedux';

const ListForm = props => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const listId = props.listId;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description, listId }));
    setTitle('');
    setDescription('');
  };


  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <div>Title:</div>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <div>Description:</div>
      <TextInput value={description} onChange={e => setDescription(e.target.value)}/>
      <Button>Add list</Button>
    </form>
    );
};

export default ListForm;