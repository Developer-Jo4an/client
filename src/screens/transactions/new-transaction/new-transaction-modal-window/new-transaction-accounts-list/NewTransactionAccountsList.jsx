import { memo } from 'react'
import { FlatList, View } from 'react-native'
import { useSelector } from 'react-redux'

import { userAccountsSelector } from '../../../../../redux/slices/user-slice/userSlice'

import NewTransactionAccount from '../new-transaction-account/NewTransactionAccount'

import { styles } from './styles'

const NewTransactionAccountsList = memo(({ activeAccount, setActiveAccount }) => {
	const accounts = useSelector(userAccountsSelector)

	return (
		<View style={ styles.newTransactionAccount }>
			<FlatList
				data={ accounts }
				renderItem={ ({ item }) => {
					const isSelect = activeAccount === item._id
					return <NewTransactionAccount account={ item } isSelect={ isSelect } callback={ setActiveAccount } />
				}}
				keyExtractor={ account => account._id }
				style={ styles.newTransactionAccountsList }
				contentContainerStyle={ styles.newTransactionAccountsContent }
				horizontal={ true }
			/>
		</View>
	)
})

export default NewTransactionAccountsList