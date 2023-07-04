import React, {useContext} from 'react'
import "./transactions.css"
import Transaction from "./transaction"
import { Globalcontext } from '../context/globalstate'

const Transactions = () => {
  const {transactions} = useContext(Globalcontext)

  return (
    <div className='transactions-container'>
      <h3 className="transactions-title">History</h3>
      <ul className="list">
        {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction}/>))}

      </ul>
    </div>

  )
}

export default Transactions
