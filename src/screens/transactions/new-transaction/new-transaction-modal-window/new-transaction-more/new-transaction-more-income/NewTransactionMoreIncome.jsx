import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList, View } from 'react-native'

import { userTransactionCategoriesIncomeSelector } from '../../../../../../redux/slices/user-slice/userSlice'
import { newTransactionAddCategoryAction, newTransactionCategorySelector } from '../../../../../../redux/slices/new-transaction/newTransactionSlice'

import NewTransactionCategoryComponent from '../../new-transaction-category-component/NewTransactionCategoryComponent'

import { styles } from './styles'

const NewTransactionMoreIncome = memo(() => {
	const dispatch = useDispatch()

	const incomeTransactions = useSelector(userTransactionCategoriesIncomeSelector)
	const newTransactionIncomeCategoryState = useSelector(newTransactionCategorySelector)

	const setNewTransactionCategory = id => dispatch(newTransactionAddCategoryAction(id))

	return (
		<View style={ styles.newTransactionMoreIncome }>
			<FlatList
				data={ incomeTransactions }
				renderItem={ ({ item }) => {
					const isSelect = newTransactionIncomeCategoryState === item._id
					return <NewTransactionCategoryComponent category={ item } isSelect={ isSelect } callback={ setNewTransactionCategory } />
				}}
				keyExtractor={ category => category._id }
				style={ styles.newTransactionMoreIncomeList }
				contentContainerStyle={ styles.newTransactionMoreIncomeContent }
				horizontal={ true }
			/>
		</View>
	)
})

export default NewTransactionMoreIncome