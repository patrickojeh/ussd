import classes from './BankListItem.module.css';
import arrowRightIcon from '../../svg/icon--arrow-right.svg';

const BankListItem = (props) => {
  return <div className={classes['list-item']}>
    <img src={props.logo} className={classes['list-item__img']} alt="Bank logo" />
    <div>
      <p className={classes['list-item__bank-name']}>{props.name}</p>
      <small className={classes['list-item__ussd']}>{props.ussd ? props.ussd : '-'}</small>
    </div>
    <span className={classes['list-item__arrow-container']}>
      <img src={arrowRightIcon} alt="Right arrow" />
    </span>
  </div>
}

export default BankListItem;