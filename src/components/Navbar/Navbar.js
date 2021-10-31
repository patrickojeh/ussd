import classes from '../Navbar/Navbar.module.css';
import filterIcon from '../../svg/icon--filter.svg';
import infoIcon from '../../svg/icon--info.svg';

const Navbar = (props) => {
  const filterHandler = () => {
    props.showModal({
      type: 'SORT'
    })
  }

  return <div className={classes.navbar}>
    <button onClick={filterHandler} type="button" className={classes.navbar__button}>
      <img src={filterIcon} alt="Filter control icon" />
    </button>
    <span className={classes.navbar__logo}>
      USSD
    </span>
    <button type="button" className={classes.navbar__button}>
      <img src={infoIcon} alt="Filter control icon" />
    </button>
  </div>
}

export default Navbar;