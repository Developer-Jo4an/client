import { memo, useEffect } from 'react'
import { Pressable, View, Animated } from 'react-native'

import { categoryIcons } from '../../../../../components/category/category-icons/categoryIcons'
import { useAnimation } from '../../../../../hooks/useAnimation'

import { OPACITY_BACKGROUND } from '../../../../../constants/styleConstants'

import { styles } from './styles'

const NewTransactionCategoryComponent = memo(({ category, isSelect, callback }) => {
	const { _id, color, name } = category

	const [animation, animationFunc] = useAnimation(isSelect)
	useEffect(() => animationFunc(200), [isSelect])

	return (
		<View style={ styles.newTransactionCategoryComponent(isSelect, color) }>
			<Pressable
				style={ styles.newTransactionCategoryComponentBtn }
				android_ripple={{ color: OPACITY_BACKGROUND }}
				onPress={ () => callback(_id) }
			>
				<Animated.View style={ styles.newTransactionCategoryComponentSignContainer(animation) }>
					<Animated.View style={ styles.newTransactionCategoryComponentSignWrapper(isSelect, color) }>
						{ categoryIcons(name, { size: 16, color: '#fff' }) }
					</Animated.View >
				</Animated.View>
				<Animated.Text style={ styles.newTransactionCategoryName(animation) }>{ name }</Animated.Text>
			</Pressable>
		</View>
	)
}, (prev, next) => {
	return (
		JSON.stringify(prev.category) === JSON.stringify(next.category) &&
		prev.isSelect === next.isSelect
	)
})
export default NewTransactionCategoryComponent