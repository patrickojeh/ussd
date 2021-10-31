import classes from './BankListItem.module.css';
import arrowRightIcon from '../../svg/icon--arrow-right.svg';

const BankListItem = (props) => {
  return <button className={classes['list-item']} onClick={props.onClickItem} data-id={props.id}>
    <img src={props.logo} className={classes['list-item__img']} alt="Bank logo" />
    <div>
      <p className={classes['list-item__bank-name']}>{props.name}</p>
      <small className={classes['list-item__ussd']}>{props.ussd}</small>
    </div>
    <span className={classes['list-item__arrow-container']}>
      <img src={arrowRightIcon} alt="Right arrow" />
    </span>
  </button>
}

export default BankListItem;