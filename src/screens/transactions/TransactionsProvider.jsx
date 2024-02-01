import React, { useContext } from 'react'

const TransactionsContext = React.createContext()
export const useTransactionsContext = () => useContext(TransactionsContext)

const TransactionsProvider = ({ children }) => {
	return (
		<TransactionsContext.Provider value={{

		}}>{ children }</TransactionsContext.Provider>
	)
}

export default TransactionsProvider