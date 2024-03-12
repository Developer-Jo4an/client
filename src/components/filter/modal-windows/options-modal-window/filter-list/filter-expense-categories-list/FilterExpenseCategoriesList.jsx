import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { userTransactionCategoriesExpenseSelector } from '../../../../../../redux/slices/user-slice/userSlice'
import { filterExpenseCategoriesSelector, toggleExpenseCategoryAction } from '../../../../../../redux/slices/filter-slice/filterSlice'

import FilterExpenseCategory from './filter-expense-category/FilterExpenseCategory'
import FilterListHeader from '../filter-list-components/filter-list-header/FilterListHeader'

import { categoriesStyles } from '../filter-list-styles/categoriesStyles'

const FilterExpenseCategoriesList = () => {
	const dispatch = useDispatch()

	const expenseCategories = useSelector(userTransactionCategoriesExpenseSelector)
	const filterExpenseCategories = useSelector(filterExpenseCategoriesSelector)

	const toggleFilterExpenseCategory = id => {
		const { subCategories } = expenseCategories.find(category => category._id === id)

		const idArray = []

		if (subCategories) subCategories.forEach(subCategory => idArray.push(subCategory._id))

		dispatch(toggleExpenseCategoryAction({ category: id, subCategories: idArray }))
	}

	return (
		<View style={ categoriesStyles.filterExpensesList }>
			<FilterListHeader header={ 'Expenses' } />
			{ expenseCategories.map(category => {
				const isSelect = filterExpenseCategories.includes(category._id)
				return <FilterExpenseCategory key={ category._id } category={ category } callback={ toggleFilterExpenseCategory } isSelect={ isSelect } />
			}) }
		</View>
	)
}

export default FilterExpenseCategoriesList