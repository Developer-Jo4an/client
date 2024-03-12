import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { filterIncomeCategoriesSelector,  filterIncomeSubCategoriesSelector, noSubCategoriesIncomeAction} from '../../../../../../../redux/slices/filter-slice/filterSlice'

import NoSubCategoriesBtn from '../../filter-list-components/no-sub-categories-btn/NoSubCategoriesBtn'
import FilterIncomeSubCategory from '../filter-income-sub-category/FilterIncomeSubCategory'

import { categoriesStyles } from '../../filter-list-styles/categoriesStyles'

const FilterIncomeSubCategoriesList = ({ subCategories, isVisible, callback, parentCategoryId }) => {
	const dispatch = useDispatch()

	const filterIncomeCategories = useSelector(filterIncomeCategoriesSelector)
	const filterIncomeSubCategories = useSelector(filterIncomeSubCategoriesSelector)

	const isNoSubCategories =
		subCategories.reduce((acc, subId) => filterIncomeSubCategories.includes(subId) ? false : acc, true)
		&&
		filterIncomeCategories.includes(parentCategoryId)

	const noSubCategoriesAction = () => {
		const idArray = subCategories.map(subCategory => subCategory._id)
		dispatch(noSubCategoriesIncomeAction({ category: parentCategoryId, subCategories: idArray }))
	}

	return (
		<View style={ categoriesStyles.filterExpenseSubCategoriesList(isVisible) }>
			{ subCategories.map(subCategory => {
				const isSelect = filterIncomeSubCategories.includes(subCategory._id)
				return <FilterIncomeSubCategory key={ subCategory._id } subCategory={ subCategory } isSelect={ isSelect } callback={ callback } />
			})}
			<NoSubCategoriesBtn callback={ noSubCategoriesAction } isSelect={ isNoSubCategories } />
		</View>
	)
}

export default FilterIncomeSubCategoriesList