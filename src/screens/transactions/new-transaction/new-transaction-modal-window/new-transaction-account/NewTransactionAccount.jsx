import { FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { userAccountsSelector } from '../../../../../redux/slices/user-slice/userSlice'
import { newTransactionAccountSelector, newTransactionAddAccountAction } from '../../../../../redux/slices/new-transaction/newTransactionSlice'

import NewTransactionAccountComponent from '../new-transaction-account-component/NewTransactionAccountComponent'

import { styles } from './styles'

const NewTransactionAccount = () => {
	const dispatch = useDispatch()

	const accounts = useSelector(userAccountsSelector)
	const newTransactionAccountState = useSelector(newTransactionAccountSelector)

	const setNewTransactionAccount = id => dispatch(newTransactionAddAccountAction(id))

	return (
		<View style={ styles.newTransactionAccount }>
			<FlatList
				data={ accounts }
				renderItem={ ({ item }) => {
					const isSelect = newTransactionAccountState === item._id
					return <NewTransactionAccountComponent account={ item } isSelect={ isSelect } callback={ setNewTransactionAccount } />
				}}
				keyExtractor={ account => account._id }
				style={ styles.newTransactionAccountsList }
				contentContainerStyle={ styles.newTransactionAccountsContent }
				horizontal={ true }
			/>
		</View>
	)
}

export default NewTransactionAccount