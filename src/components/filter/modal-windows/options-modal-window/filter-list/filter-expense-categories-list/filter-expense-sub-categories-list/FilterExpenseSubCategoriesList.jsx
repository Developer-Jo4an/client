import React from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { filterExpenseCategoriesSelector, filterExpenseSubCategoriesSelector, noSubCategoriesExpenseAction } from '../../../../../../../redux/slices/filter-slice/filterSlice'

import FilterExpenseSubCategory from '../filter-expense-sub-category/FilterExpenseSubCategory'
import NoSubCategoriesBtn from '../../filter-list-components/no-sub-categories-btn/NoSubCategoriesBtn'

import { categoriesStyles } from '../../filter-list-styles/categoriesStyles'

const FilterExpenseSubCategoriesList = ({ subCategories, isVisible, callback, parentCategoryId }) => {
	const dispatch = useDispatch()

	const filterExpenseCategories = useSelector(filterExpenseCategoriesSelector)
	const filterExpenseSubCategories = useSelector(filterExpenseSubCategoriesSelector)

	const isNoSubCategories =
		subCategories.reduce((acc, subId) => filterExpenseSubCategories.includes(subId._id) ? false : acc, true)
		&&
		filterExpenseCategories.includes(parentCategoryId)

	const noSubCategoriesAction = () => {
		const idArray = subCategories.map(subCategory => subCategory._id)
		dispatch(noSubCategoriesExpenseAction({ category: parentCategoryId, subCategories: idArray }))
	}

	return (
		<View style={ categoriesStyles.filterExpenseSubCategoriesList(isVisible) }>
			{ subCategories.map(subCategory => {
				const isSelect = filterExpenseSubCategories.includes(subCategory._id)
				return <FilterExpenseSubCategory key={ subCategory._id } subCategory={ subCategory } isSelect={ isSelect } callback={ callback } />
			})}
			<NoSubCategoriesBtn callback={ noSubCategoriesAction } isSelect={ isNoSubCategories } />
		</View>
	)
}

export default FilterExpenseSubCategoriesList