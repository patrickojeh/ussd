import { useContext, useEffect, useState } from 'react';
import BankListItem from '../BankListItem';
import { BanksDataContext as bdc } from '../../../store/banks-data-context';
import classes from '../BanksList.module.css';

const BanksList = (props) => {
  const [favsList, setFavsList] = useState([]);
  let banksDataContext = useContext(bdc);

  useEffect(() => {
    const favs = banksDataContext.defaultData.filter(bank => bank.fav === true);
    setFavsList(favs);
  }, [banksDataContext.defaultData])

  const BankListItemHandler = (e) => {
    const bankItemID = e.currentTarget.getAttribute('data-id');
    props.onShowModal({
      bankItemID,
      type: 'USSD'
    });
  }

  const output = (favsList.length === 0) ?     
    <p className={classes['banks-list__no-match']}>You have no favorites</p> :
    favsList.map(bank => {
      return (bank.ussd) &&
      <BankListItem 
        onClickItem={BankListItemHandler}
        key={bank.code}
        id={bank.code}
        name={bank.name}
        ussd={bank.ussd}
        logo={bank.logo}
      />
    });    

  return <div className={classes['banks-list']}>
    { output }
  </div>
}

export default BanksList;