import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { BanksDataContext as bdc } from '../../store/banks-data-context';
import  { Button, ButtonLink } from '../UI/Button';
import copy from 'copy-to-clipboard';
import classes from './USSDModal.module.css';

const USSDModal = (props) => {
  const banksDataContext = useContext(bdc);
  const [selectedBank, setSelectedBank] = useState(null);
  const copyBtn = useRef();
  useEffect(() => {
    banksDataContext.defaultData.find(bank => {
      (bank.code === props.bankId) && setSelectedBank(bank);
      return false;
    })
  }, [banksDataContext.defaultData, props.bankId])
  const copyHandler = () => {
    const ussd = copyBtn.current.getAttribute('data-ussd');
    copy(ussd);
    copyBtn.current.textContent = 'Copied';
    setTimeout(() => {
      try {
        copyBtn.current.textContent = 'Copy';
      } catch (e) {
        return false;
      } 
    }, 3000)
  }
  return <Fragment>
    { selectedBank && [selectedBank].map(bank => {
      return <Fragment key={bank.code}>
        <div className={classes['ussd-modal']}>
          <p className={classes['ussd-modal__name']}>
            <img 
              className={classes['ussd-modal__logo']} 
              src={bank.logo} 
              alt={`${bank.name}'s logo`}
            /> {bank.name}
          </p>
          <h3 className={classes['ussd-modal__ussd']}>
            {bank.ussd}
          </h3>
        </div>
        <div className={classes['ussd-modal__button-grid']}>
          <Button data-ussd={bank.ussd} onClick={copyHandler} ref={copyBtn} dark-theme={true}>Copy</Button>
          <ButtonLink href={`tel: ${bank.ussd}`} className="btn">Dial</ButtonLink>
        </div>
      </Fragment>
    }) }
  </Fragment>
}

export default USSDModal;