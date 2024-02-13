import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchstring } from '../../redux/store';

const SearchForm = () => {

  const dispatch = useDispatch();
  const [phrase, setPhrase] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchstring(phrase));
    setPhrase('');
  };

  return (
      <form className={styles.searchForm} onSubmit={handleSubmit}>
          <TextInput placeholder="Search..." onChange={e => setPhrase(e.target.value)}/>
          <Button>
            <span className="fa fa-search" />
          </Button>
      </form>
  );
};

export default SearchForm;