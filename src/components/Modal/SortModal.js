import { useContext, useState } from 'react';
import { Button } from '../UI/Button';
import { BanksDataContext as bdc } from '../../context/banks-data-context';
import classes from './SortModal.module.css';

const SortModal = (props) => {
  const BanksDataContext = useContext(bdc);
  const [selectedSort, setSelectedSort] = useState(BanksDataContext.sortBy);

  const radioInputHandler = (event) => {
    if (event.target.checked) {
      setSelectedSort((prev) => {
        return prev === 'asc' ? 'desc' : 'asc'
      });
    }
  }

  const applyBtnHandler = (event) => {
    event.preventDefault();
    const sorted = BanksDataContext.data.sort((a, b) => {      
      if (a.name > b.name) {
        return (selectedSort === 'asc') ? 1 : -1;
      } else if (a.name < b.name) {
        return (selectedSort === 'asc') ? -1 : 1;
      } else {
        return 0;
      }
    });
    console.log(selectedSort)
    BanksDataContext.updateSort(selectedSort);
    BanksDataContext.filterData(sorted);
    props.onClose();
  }
  

  return <form onChange={radioInputHandler} onSubmit={applyBtnHandler}>
    <ul className={classes['sort-modal__list']}>
      <li className={classes['sort-modal__list-item']}>        
        <input
          className={classes['sort-modal__checkbox']} 
          name="sort" 
          type="radio" 
          id="asc" 
          value="asc"
          defaultChecked={BanksDataContext.sortBy === 'asc'} />
        <label className={classes['sort-modal__label']} htmlFor="asc">A to Z</label>
      </li>
      <li className={classes['sort-modal__list-item']}>        
        <input
          className={classes['sort-modal__checkbox']} 
          name="sort" 
          type="radio" 
          id="desc" 
          value="desc"
          defaultChecked={BanksDataContext.sortBy === 'desc'} />
        <label className={classes['sort-modal__label']} htmlFor="desc">Z to A</label>
      </li>
    </ul>
    <Button>Apply</Button>
  </form>
}

export default SortModal;