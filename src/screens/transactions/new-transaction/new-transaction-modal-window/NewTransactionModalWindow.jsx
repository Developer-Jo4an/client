import { memo } from 'react'
import { View } from 'react-native'

import NewTransactionType from './new-transaction-type/NewTransactionType'
import NewTransactionDate from './new-transaction-date/NewTransactionDate'
import NewTransactionCount from './new-transaction-count/NewTransactionCount'
import NewTransactionDescription from '../../../home/accounts/modal-windows/new-account-modal-window/new-transaction-description/NewTransactionDescription'
import NewTransactionAccount from './new-transaction-account/NewTransactionAccount'
import NewTransactionMore from './new-transaction-more/NewTransactionMore'

import { styles } from './styles'

const NewTransactionModalWindow = memo(() => {
	return (
		<View style={ styles.newTransactionModalWindowContainer }>
			<NewTransactionType />
			<NewTransactionDate />
			<NewTransactionCount />
			<NewTransactionDescription />
			<NewTransactionAccount />
			<NewTransactionMore />
		</View>
	)
})

export default NewTransactionModalWindow