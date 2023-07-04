import { useState, useContext } from "react"
import { Globalcontext } from '../context/globalstate'
import React from 'react'
import "./addtransaction.css"

const Addtransaction = () => {
  const {addtransaction} = useContext(Globalcontext)
  const [text, setText] = useState("")
  const [amount, setAmount] = useState("")
  const [date, setDate] = useState(Date.now())

  const onSubmit = e =>{
    e.preventDefault();
    setText("")
    setAmount("")
    const newTransaction = {
      id: Math.floor(Math.random()* 1000),
      text: text,
      date: date,
      amount: Number(amount)
    }
    addtransaction(newTransaction)
  }
  return (
    <div>
       <h3 className="new-transaction-title">Add new transaction</h3>
       <form id="form" onSubmit={onSubmit}>
        <div  className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div  className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value= {amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount.." />
        </div>
        <div className="form_control">
          <label htmlFor="start">Transaction date:</label>
          <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default Addtransaction
