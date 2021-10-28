import { useState } from 'react';
import classes from './Tabs.module.css';

const Tabs = () => {
  const tabName = {
    all: 'All',
    favs: 'Favorites'
  }
  const [activeTab, setActiveTab] = useState(tabName.all)

  const tabsBtnHandler = (event) => {
    setActiveTab(event.target.textContent);
  }

  let allBtnClass = (activeTab === tabName.all) && classes['tabs__button--active'];
  let favBtnClass = (activeTab === tabName.favs) && classes['tabs__button--active'];

  return <div className={classes.tabs}>
    <button onClick={tabsBtnHandler} className={`${classes.tabs__button} ${allBtnClass}`} type="button">{tabName.all}</button>
    <button onClick={tabsBtnHandler} className={`${classes.tabs__button} ${favBtnClass}`} type="button">{tabName.favs}</button>
  </div>
}

export default Tabs;