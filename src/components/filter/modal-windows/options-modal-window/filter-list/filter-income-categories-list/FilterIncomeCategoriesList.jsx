import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { userTransactionCategoriesIncomeSelector } from '../../../../../../redux/slices/user-slice/userSlice'
import { filterIncomeCategoriesSelector, toggleIncomeCategoryAction } from '../../../../../../redux/slices/filter-slice/filterSlice'

import FilterListHeader from '../filter-list-components/filter-list-header/FilterListHeader'
import FilterIncomeCategory from './filter-income-category/FilterIncomeCategory'

import { categoriesStyles } from '../filter-list-styles/categoriesStyles'

const FilterIncomeCategoriesList = () => {
	const dispatch = useDispatch()

	const incomeCategories = useSelector(userTransactionCategoriesIncomeSelector)
	const filterIncomeCategories = useSelector(filterIncomeCategoriesSelector)

	const toggleFilterExpenseCategory = id => {
		const { subCategories } = incomeCategories.find(category => category._id === id)

		const idArray = []

		if (subCategories) subCategories.forEach(subCategory => idArray.push(subCategory._id))

		dispatch(toggleIncomeCategoryAction({ category: id, subCategories: idArray }))
	}

	return (
		<View style={ categoriesStyles.filterExpensesList }>
			<FilterListHeader header={ 'Incomes' } />
			{ incomeCategories.map(category => {
				const isSelect = filterIncomeCategories.includes(category._id)
				return <FilterIncomeCategory key={ category._id } category={ category } callback={ toggleFilterExpenseCategory } isSelect={ isSelect } />
			}) }
		</View>
	)
}

export default FilterIncomeCategoriesList