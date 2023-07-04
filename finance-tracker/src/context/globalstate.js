import React, {createContext, useReducer} from "react"
import AppReducer from "./AppReducer"

const initialState = {
    transactions: []
}

//context
export const Globalcontext = createContext(initialState)

//provider
export const Globalprovider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function addtransaction(transaction){
        dispatch(
            {type: "ADD_TRANSACTION",
            payload: transaction})
        
    }
    
    return (<Globalcontext.Provider value={{
        transactions: state.transactions,
        addtransaction
        }}>
        {children}
    </Globalcontext.Provider>)
}

