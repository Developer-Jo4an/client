import { memo } from 'react'
import { FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { userAccountsSelector } from '../../../../../../redux/slices/user-slice/userSlice'
import { newTransactionAddTransferAccountAction, newTransactionTransferAccountSelector } from '../../../../../../redux/slices/new-transaction/newTransactionSlice'

import NewTransactionAccountComponent from '../../new-transaction-account-component/NewTransactionAccountComponent'

import { styles } from './styles'

const NewTransactionMoreTransfer = memo(() => {
	const dispatch = useDispatch()

	const accounts = useSelector(userAccountsSelector)
	const newTransactionTransferAccountState = useSelector(newTransactionTransferAccountSelector)

	const setNewTransactionTransferAccount = id => dispatch(newTransactionAddTransferAccountAction(id))

	return (
		<View style={ styles.newTransactionMoreTransfer }>
			<FlatList
				data={ accounts }
				renderItem={ ({ item }) => {
					const isSelect = newTransactionTransferAccountState === item._id
					return <NewTransactionAccountComponent account={ item } isSelect={ isSelect } callback={ setNewTransactionTransferAccount } />
				}}
				keyExtractor={ account => account._id }
				style={ styles.newTransactionMoreTransferList }
				contentContainerStyle={ styles.newTransactionMoreTransferContent }
				horizontal={ true }
			/>
		</View>
	)
})

export default NewTransactionMoreTransfer