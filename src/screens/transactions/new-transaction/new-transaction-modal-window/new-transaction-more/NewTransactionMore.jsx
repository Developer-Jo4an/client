import { memo, useCallback, useEffect, useRef } from 'react'
import { View, Animated } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import {
	newTransactionAddCategoryAction,
	newTransactionAddSubCategoryAction, newTransactionAddTransferAccountAction,
	newTransactionCategorySelector,
	newTransactionSubCategorySelector, newTransactionTransferAccountSelector,
	newTransactionTypeSelector
} from '../../../../../redux/slices/new-transaction/newTransactionSlice'
import {
	userTransactionCategoriesExpenseSelector,
	userTransactionCategoriesIncomeSelector
} from '../../../../../redux/slices/user-slice/userSlice'

import NewTransactionAccountsList from '../new-transaction-accounts-list/NewTransactionAccountsList'
import NewTransactionCategoriesList from '../new-transaction-categories-list/NewTransactionCategoriesList'

import { EXPENSE_TYPE, INCOME_TYPE, TRANSFER_TYPE } from '../../../../../constants/variableConstants'

import { styles } from './styles'

const NewTransactionMore = memo(() => {
	const dispatch = useDispatch()

	const newTransactionTypeState = useSelector(newTransactionTypeSelector)

	const expenseCategories = useSelector(userTransactionCategoriesExpenseSelector)
	const incomeCategories = useSelector(userTransactionCategoriesIncomeSelector)

	const newTransactionCategoryState = useSelector(newTransactionCategorySelector)
	const newTransactionSubCategoryState = useSelector(newTransactionSubCategorySelector)
	const newTransactionTransferAccountState = useSelector(newTransactionTransferAccountSelector)

	const setNewTransactionCategory = id => dispatch(newTransactionAddCategoryAction(id))
	const setNewTransactionSubCategory = id => dispatch(newTransactionAddSubCategoryAction(id))
	const setNewTransferAccount = useCallback(id => dispatch(newTransactionAddTransferAccountAction(id)), [])

	const animationCondition = () => newTransactionTypeState === EXPENSE_TYPE ? 0 : newTransactionTypeState === INCOME_TYPE ? 1 : 2

	const animation = useRef(new Animated.Value(animationCondition())).current

	useEffect(() => {
		Animated.timing(animation, {
			toValue: animationCondition(),
			duration: 100,
			useNativeDriver: false
		}).start()
	}, [newTransactionTypeState])

	return (
		<View style={ styles.newTransactionMore }>
			<Animated.View style={ styles.newTransactionMoreWrapper(animation, EXPENSE_TYPE, newTransactionTypeState) }>
				<NewTransactionCategoriesList
					categories={ expenseCategories }
					activeCategory={ newTransactionCategoryState }
					setActiveCategory={ setNewTransactionCategory }
					activeSubCategory={ newTransactionSubCategoryState }
					setActiveSubCategory={ setNewTransactionSubCategory }
				/>
			</Animated.View>
			<Animated.View style={ styles.newTransactionMoreWrapper(animation, INCOME_TYPE, newTransactionTypeState) }>
				<NewTransactionCategoriesList
					categories={ incomeCategories }
					activeCategory={ newTransactionCategoryState }
					setActiveCategory={ setNewTransactionCategory }
					activeSubCategory={ newTransactionSubCategoryState }
					setActiveSubCategory={ setNewTransactionSubCategory }
				/>
			</Animated.View>
			<Animated.View style={ styles.newTransactionMoreWrapper(animation, TRANSFER_TYPE, newTransactionTypeState) }>
				<NewTransactionAccountsList activeAccount={ newTransactionTransferAccountState } setActiveAccount={ setNewTransferAccount } />
			</Animated.View>
		</View>
	)
})

export default NewTransactionMore