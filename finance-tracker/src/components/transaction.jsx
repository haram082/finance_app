import React from 'react'

const Transaction = ({transaction}) => {
  const sign = transaction.amount < 0 ? "minus" : "plus";  
  return (
    <li className={sign}>{transaction.text} <span className='transactions-date'>{transaction.date}</span>< span className='transaction-amount'>${transaction.amount}</span></li>
  )
}

export default Transaction
