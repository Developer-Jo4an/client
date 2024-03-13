import { useSelector } from 'react-redux'

import {
	userTransactionsSelector
} from '../redux/slices/user-slice/userSlice'

import {
	filterAccountsSelector,
	filterCategoriesTypeSelector,
	filterExpenseCategoriesSelector,
	filterExpenseSubCategoriesSelector,
	filterIncomeCategoriesSelector,
	filterIncomeSubCategoriesSelector,
	filterTimeRangeDefaultSelector
} from '../redux/slices/filter-slice/filterSlice'


export const useFilteredTransactions = () => {
	const transactions = useSelector(userTransactionsSelector)


	const timeRangeDefault = useSelector(filterTimeRangeDefaultSelector)
	const timeRangeCustom = useSelector(filterTimeRangeDefaultSelector)

	const transactionTypes = useSelector(filterCategoriesTypeSelector)

	const accounts = useSelector(filterAccountsSelector)

	const expenseCategories = useSelector(filterExpenseCategoriesSelector)
	const incomeCategories = useSelector(filterIncomeCategoriesSelector)
	const expenseSubCategories = useSelector(filterExpenseSubCategoriesSelector)
	const incomeSubCategories = useSelector(filterIncomeSubCategoriesSelector)

	return [transactions, () => {}]
}