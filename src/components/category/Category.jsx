import { memo } from 'react'
import { Pressable, View, Text } from 'react-native'

import { categoryIcons } from './category-icons/categoryIcons'

import { NO_CLICK_COLOR, OPACITY_BACKGROUND } from '../../constants/styleConstants'

import { styles } from './styles'

const Category = ({ category, callback, styleProps }) => {
	const { name, color } = category

	return (
		<View style={{ ...styles.category(callback), ...styleProps }}>
			<Pressable onPress={ callback ? callback : () => {} } android_ripple={{ color: callback ? OPACITY_BACKGROUND : NO_CLICK_COLOR }}>
				<View style={ styles.categoryWrapper }>
					<View style={ styles.categorySignWrapper(color) }>
						{ categoryIcons(name, { color: '#fff', size: 18 }) }
					</View>
					<Text>{ name }</Text>
				</View>
			</Pressable>
		</View>
	)
}

const MemoizedCategory = memo(Category, (prev, next) => {
	return (
		prev.category._id === next.category._id &&
		prev.category.sign === next.category.sign &&
		prev.category.color === next.category.color	&&
		prev.category.count === next.category.count
	)
})

export { MemoizedCategory }

export default Category