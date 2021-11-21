import { Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import Tabs from '../UI/Tabs';
import classes from './Header.module.css';

const Header = (props) => {
  return <Fragment>
    <div className={classes.Header}>
      <Navbar showModal={props.onShowModal} />
        <Tabs onActiveTab={props.onTabSwitch} />
    </div>
  </Fragment>
}

export default Header;