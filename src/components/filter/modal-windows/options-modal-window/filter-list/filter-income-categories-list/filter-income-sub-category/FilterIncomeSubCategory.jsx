import { Pressable, View  } from 'react-native'

import FilterCheckbox from '../../filter-list-components/filter-checkbox/FilterCheckbox'
import { MemoizedCategory } from '../../../../../../category/Category'

import { OPACITY_BACKGROUND } from '../../../../../../../constants/styleConstants'

import { categoriesStyles } from '../../filter-list-styles/categoriesStyles'

const FilterIncomeSubCategory = ({ subCategory, isSelect, callback }) => {
	return (
		<View style={ categoriesStyles.filterExpenseSubCategory }>
			<Pressable style={ categoriesStyles.filterExpenseSubCategoryBtn } android_ripple={{ color: OPACITY_BACKGROUND }} onPress={ () => callback(subCategory._id) }>
				<MemoizedCategory key={ subCategory._id } category={ subCategory } callback={ false } styleProps={{ backgroundColor: 'transparent' }} />
				<FilterCheckbox isSelect={ isSelect } />
			</Pressable>
		</View>
	)
}

export default FilterIncomeSubCategory