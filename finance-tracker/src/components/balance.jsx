import React, { useContext } from 'react'
import { Globalcontext } from '../context/globalstate';
import "./balance.css"
const Balance = () => {
  const {transactions} = useContext(Globalcontext)
  const balance= transactions.map(transaction => transaction.amount).reduce((a, b) => a+b ,0).toFixed(2)
  return (
    <div>
      <div className='Balance'>My Balance: <span className="balance-amount">$ {balance}</span> </div>
    </div>
  )
}

export default Balance
