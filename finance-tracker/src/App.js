import './App.css';
import Balance from "./components/balance";
import Income from "./components/income";
import Transactions from "./components/transactions";
import Addtransaction from "./components/addtransaction";
import { Globalprovider } from './context/globalstate';



function App() {
  return (
    <Globalprovider>
        <div className='container'>
           <h2 className='Title'>My Finance Tracker</h2>
          <Balance/>
          <Income/>
          <Addtransaction/>
          <Transactions/>
        </div>
    </Globalprovider>
  );
}

export default App;
