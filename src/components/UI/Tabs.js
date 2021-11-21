import { useState } from 'react';
import classes from './Tabs.module.css';

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState('All')
  const tabsBtnHandler = (event) => {
    props.onActiveTab(event.target.textContent);
    setActiveTab(event.target.textContent);
  }

console.log(activeTab)
  let allBtnClass = (activeTab === 'All') && classes['tabs__button--active'];
  let favBtnClass = (activeTab === 'Favorites') && classes['tabs__button--active'];

  return <div className={classes.tabs}>
    <button onClick={tabsBtnHandler} className={`${classes.tabs__button} ${allBtnClass}`} type="button">All</button>
    <button onClick={tabsBtnHandler} className={`${classes.tabs__button} ${favBtnClass}`} type="button">Favorites</button>
  </div>
}

export default Tabs;