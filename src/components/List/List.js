import style from './List.module.scss';
import Column from '../Column/Column';
import { useState } from 'react';
import shortid from 'shortid';
import ColumnForm from '../ColumnForm/ColumnForm';

const List = () => {

  const [columns, setColumns] = useState([ 
    { id: 1, title: 'Books', icon: 'book' }, 
    { id: 2, title: 'Movies', icon: 'film' }, 
    { id: 3, title: 'Games', icon: 'gamepad' } 
  ]); 

  /* useEffect(() => { 

    setTimeout(() => { 
      setColumns([...columns, { id: 4, title: 'Test column'}]); 
    }, 2000); 

  }, []); */

  const addColumn = newColumn => {
    setColumns([...columns, { id: shortid(), title: newColumn.title, icon: newColumn.icon }]);
    };
  

  return (
    <div className={style.list}>

      <header className={style.header}>
        <h2 className={style.title}>Things to do<span>soon</span></h2>
      </header>

      <p className={style.description}>Interesting things I want to check out</p>

      <section className={style.columns}>
      {columns.map(column => <Column key={column.id} title={column.title} icon={column.icon} />)}
      </section>

      <ColumnForm action={addColumn} />

    </div>
  );
};

export default List;