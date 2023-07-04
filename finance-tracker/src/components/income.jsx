import React, { useContext } from 'react'
import { Globalcontext } from '../context/globalstate';
import "./income.css"
const Income = () => {
  const {transactions} = useContext(Globalcontext)
  const amounts = transactions.map(transaction => transaction.amount)
  const deposits = amounts.filter(amount => amount > 0).reduce((a, b) => a+b,0).toFixed(2)
  const withdrawals = amounts.filter(amount => amount< 0).reduce((a, b) => a+b,0).toFixed(2)
  return (
    <div>
      <div className='income-container'>
        <div className='deposit'>
            Deposit
            <div className="money-plus">${deposits}</div>
        </div>
        <div className="withdrawals">
            Withdrawals
            <div className="money-minus">-${withdrawals}</div>
        </div>
      </div>
    </div>
  )
}

export default Income
