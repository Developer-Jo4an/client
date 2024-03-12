import { useEffect, useState } from 'react'
import { Pressable, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { useAnimation } from '../../../../../../../hooks/useAnimation'
import { toggleExpenseSubCategoryAction } from '../../../../../../../redux/slices/filter-slice/filterSlice'

import { MemoizedCategory } from '../../../../../../category/Category'
import FilterExpenseSubCategoriesList from '../filter-expense-sub-categories-list/FilterExpenseSubCategoriesList'
import FilterArrow from '../../filter-list-components/filter-arrow/FilterArrow'
import FilterCheckbox from '../../filter-list-components/filter-checkbox/FilterCheckbox'

import { OPACITY_BACKGROUND } from '../../../../../../../constants/styleConstants'

import { categoriesStyles } from '../../filter-list-styles/categoriesStyles'

const FilterExpenseCategory = ({ category, callback, isSelect }) => {
	const dispatch = useDispatch()

	const { subCategories } = category

	const [isVisibleSubCategories, setVisibleSubCategories] = useState(false)

	const [animation, animationFunc] = useAnimation(isVisibleSubCategories)
	useEffect(() => animationFunc(200), [isVisibleSubCategories])

	const toggleExpenseFilterCategory = () => callback(category._id)
	const toggleExpenseSubFilterCategory = subCategoryId => dispatch(toggleExpenseSubCategoryAction({ subCategory: subCategoryId, parentCategory: category._id }))

	return (
		<View style={ categoriesStyles.filterCategoryContainer }>
			<View style={ categoriesStyles.filterCategory(isVisibleSubCategories) }>
				<View style={ categoriesStyles.filterCategoryWrapper }>
					<Pressable
						style={ categoriesStyles.filterCategoryButton }
						android_ripple={{ color: OPACITY_BACKGROUND }}
						onPress={ () => subCategories.length ? setVisibleSubCategories(prev => !prev) : null }
					>
						<MemoizedCategory category={ category } callback={ false } styleProps={{ backgroundColor: 'transparent' }} />
						<FilterArrow animation={ animation } />
					</Pressable>
				</View>
				<FilterCheckbox isSelect={ isSelect } callback={ toggleExpenseFilterCategory } />
			</View>
			{
				subCategories[0]
				&&
				<FilterExpenseSubCategoriesList
					subCategories={ subCategories }
					isVisible={ isVisibleSubCategories }
					callback={ toggleExpenseSubFilterCategory }
					parentCategoryId={ category._id }
				/>
			}
		</View>
	)
}

export default FilterExpenseCategory