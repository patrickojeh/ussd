import { useContext } from 'react';
import Input from '../UI/Input';
import { BanksDataContext as bdc } from '../../context/banks-data-context';
import classes from './Search.module.css';

const Search = (props) => {
  const banksDataContext = useContext(bdc);
  const searchHandler = (event) => {
    const keyword = event.target.value.trim().toLowerCase();
    const result = banksDataContext.defaultData.filter(dataItem => {
      return dataItem.name.toLowerCase().includes(keyword);
    })
    banksDataContext.search(result);
  }
  return <div className={classes['search-container']}>
    <Input onChange={searchHandler} placeholder="Search" hasIcon="search" />
  </div>
}

export default Search;