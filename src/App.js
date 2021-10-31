import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import BanksList from './components/BanksList/BanksList';
import { BanksDataProvider } from './context/banks-data-context';
import Modal from './components/Modal/Modals';
import classes from './App.module.css';

function App() {
  const [modal, setModal] = useState({})

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

  return (
    <div className={classes.app}>
      <BanksDataProvider>
        <Header onShowModal={sortModalHandler} />
        <BanksList 
          onShowModal={banksListModalHandler} 
        />
      {
        ReactDOM.createPortal(<Modal 
          onShow={modal.active}
          id={modal.id}
          type={modal.type}
          onClose={closeModalHandler} />, 
          document.querySelector('body'))
      }
      </BanksDataProvider>
    </div>
  );
}

export default App;
