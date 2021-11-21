import { useContext, useEffect, useState } from 'react';
import BankListItem from './BankListItem';
import Loader from 'react-loader-spinner';
import { BanksDataContext as bdc } from '../../store/banks-data-context';
import classes from './BanksList.module.css';

const BanksList = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  let banksDataContext = useContext(bdc);

  useEffect(() => {
    const storedBankData = localStorage.getItem('banks_data');
    if (!storedBankData) {
      fetch('https://nigerianbanks.xyz/')
      .then(response => {
        return response.json();
      })
      .then(data => {
        const modifiedData = data.map(item => {
          return Object.assign(item, {fav: false});
        })
        localStorage.setItem('banks_data', JSON.stringify(modifiedData));
        setIsLoading(false);
        banksDataContext.updateBanksData(modifiedData);
      })
      .catch(e => {
        setIsLoading(false);
        setHasError(true);
      })
    } else {
      let parsedBankData = JSON.parse(storedBankData);
      setIsLoading(false);      
      banksDataContext.updateBanksData(parsedBankData);
    }
  }, [])

  const BankListItemHandler = (e) => {
    const bankItemID = e.currentTarget.getAttribute('data-id');
    props.onShowModal({
      bankItemID,
      type: 'USSD'
    });
  }

  const loader = isLoading &&
    <div className={classes['banks-list__loader']}>
        <Loader
          type="TailSpin"
          color="#fff"
          height={32}
          width={32}
      />
    </div>;

  const output = (banksDataContext.data.length === 0 && !isLoading && !hasError) ?     
    <p className={classes['banks-list__no-match']}>No match found</p> :
    (hasError) ?
    <p className={classes['banks-list__no-match']}>Something went wrong</p> :
    banksDataContext.data.map(bank => {
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
    { loader }
    { output }
  </div>
}

export default BanksList;