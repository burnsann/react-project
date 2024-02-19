import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchstring } from '../../redux/store';

const SearchForm = () => {

  const dispatch = useDispatch();
  const searchString = useSelector(state => state.searchString);
  const [phrase, setPhrase] = useState(searchString);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchstring(phrase));
    setPhrase('');
  };

  return (
      <form className={styles.searchForm} onSubmit={handleSubmit}>
          <TextInput placeholder="Search..." value={phrase} onChange={e => setPhrase(e.target.value)}/>
          <Button>
            <span className="fa fa-search" />
          </Button>
      </form>
  );
};

export default SearchForm;