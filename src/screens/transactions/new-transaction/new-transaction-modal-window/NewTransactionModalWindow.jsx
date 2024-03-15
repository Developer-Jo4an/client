import {memo, useCallback} from 'react'
import { View } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

import {
	newTransactionAccountSelector,
	newTransactionAddAccountAction
} from '../../../../redux/slices/new-transaction/newTransactionSlice'

import NewTransactionType from './new-transaction-type/NewTransactionType'
import NewTransactionDate from './new-transaction-date/NewTransactionDate'
import NewTransactionCount from './new-transaction-count/NewTransactionCount'
import NewTransactionDescription from '../../../home/accounts/modal-windows/new-account-modal-window/new-transaction-description/NewTransactionDescription'
import NewTransactionAccountsList from './new-transaction-accounts-list/NewTransactionAccountsList'
import NewTransactionMore from './new-transaction-more/NewTransactionMore'

import { styles } from './styles'

const NewTransactionModalWindow = memo(() => {
	const dispatch = useDispatch()

	const newTransactionAccountState = useSelector(newTransactionAccountSelector)
	const setNewTransactionAccountState = useCallback(id => dispatch(newTransactionAddAccountAction(id)), [])

	return (
		<View style={ styles.newTransactionModalWindowContainer }>
			<NewTransactionType />
			<NewTransactionDate />
			<NewTransactionCount />
			<NewTransactionDescription />
			<NewTransactionAccountsList activeAccount={ newTransactionAccountState } setActiveAccount={ setNewTransactionAccountState } />
			<NewTransactionMore />
		</View>
	)
})

export default NewTransactionModalWindow