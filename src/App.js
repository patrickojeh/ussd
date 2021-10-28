import Header from './components/Header/Header';
import BanksList from './components/BanksList/BanksList';
import { BanksDataProvider } from './context/banks-data-context';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.app}>
      <BanksDataProvider>
        <Header />
        <BanksList />
      </BanksDataProvider>
    </div>
  );
}

export default App;
