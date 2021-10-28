import { useContext, useEffect, useState } from 'react';
import BankListItem from './BankListItem';
import Loader from 'react-loader-spinner';
import { BanksDataContext as bdc } from '../../context/banks-data-context';
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
        localStorage.setItem('banks_data', JSON.stringify(data));
        setIsLoading(false);
        banksDataContext.updateBanksData(data);
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
      return <BankListItem 
        key={bank.code}
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