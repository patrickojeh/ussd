import { Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import Tabs from '../UI/Tabs';
import Search from '../Search/Search';
import classes from './Header.module.css';

const Header = () => {

  return <Fragment>
    <div className={classes.Header}>
      <Navbar />
      <Tabs />
    </div>
    <Search />
  </Fragment>
}

export default Header;