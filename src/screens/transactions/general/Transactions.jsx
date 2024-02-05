import React from 'react'

import TransactionsProvider from './TransactionsProvider'
import TransactionsWrapper from './TransactionsWrapper'

const Transactions = () => {
	return (
		<TransactionsProvider>
			<TransactionsWrapper />
		</TransactionsProvider>
	)
}

export default Transactions