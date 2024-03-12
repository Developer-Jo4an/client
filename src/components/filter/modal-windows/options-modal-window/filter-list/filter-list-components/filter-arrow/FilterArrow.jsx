import { memo } from 'react'
import { Animated } from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { styles } from './styles'

const FilterArrow = memo(({ animation }) => {
	return (
		<Animated.View style={ styles.filterExpenseCategoryArrowWrapper(animation) }>
			<MaterialIcons name={ 'keyboard-arrow-down' } size={ 20 } color={ '#000' } />
		</Animated.View>
	)
})

export default FilterArrow