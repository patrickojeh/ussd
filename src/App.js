import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import BanksList from './components/BanksList/BanksList';
import Favorites from './components/BanksList/Favorites/Favorites';
import Modal from './components/Modal/Modals';
import classes from './App.module.css';
import Search from './components/Search/Search';

function App() {
  const [modal, setModal] = useState({});
  const [activeTab, setActiveTab] = useState('all');

  const banksListModalHandler = (mod) => {
    setModal({
      active: true,
      id: mod.bankItemID ? mod.bankItemID : null,
      type: mod.type,
    })
  }
  const sortModalHandler = (mod) => {
    setModal({
      active: true,
      type: mod.type,
    })
  }
  const closeModalHandler = () => {
    setModal((prevState) => {
      return {
        ...prevState,
        id: null,
        active: false
      }
    })
  }

  const tabSwitchHandler = (activeTab) => {
    setActiveTab(activeTab.toLowerCase());
  }

  return <Fragment>
    <div className={classes.app}>
      <Header onShowModal={sortModalHandler} onTabSwitch={tabSwitchHandler} />      
      { activeTab === 'all' &&
        <Fragment>
          <Search />
          <BanksList 
            onShowModal={banksListModalHandler} 
          />
        </Fragment>
      }
      { activeTab === 'favorites' &&
        <Favorites
          onShowModal={banksListModalHandler} 
        />
      }
    {
      ReactDOM.createPortal(<Modal 
        onShow={modal.active}
        id={modal.id}
        type={modal.type}
        onClose={closeModalHandler} />, 
        document.querySelector('body'))
    }
    </div>
  </Fragment>
}

export default App;
