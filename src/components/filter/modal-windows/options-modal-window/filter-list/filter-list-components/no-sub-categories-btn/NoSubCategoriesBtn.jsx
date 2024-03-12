import { memo } from 'react'
import { Pressable, Text, View } from 'react-native'

import FilterCheckbox from '../filter-checkbox/FilterCheckbox'

import { OPACITY_BACKGROUND } from '../../../../../../../constants/styleConstants'

import { styles } from './styles'

const NoSubCategoriesBtn = memo(({ callback, isSelect }) => {
	return (
		<View style={ styles.filterNoSubCategoryBtnWrapper }>
			<Pressable
				style={ styles.filterNoSubCategoryBtn}
				android_ripple={{ color: OPACITY_BACKGROUND }}
				onPress={ callback }
			>
				<Text>No subcategories</Text>
				<FilterCheckbox isSelect={ isSelect } />
			</Pressable>
		</View>
	)
}, (prev, next) => prev.isSelect === next.isSelect)

export default NoSubCategoriesBtn