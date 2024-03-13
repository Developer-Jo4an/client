import { memo } from 'react'
import { Animated } from 'react-native'

import { ChevronDown } from 'lucide-react-native'

import { styles } from './styles'

const FilterArrow = memo(({ animation }) => {
	return (
		<Animated.View style={ styles.filterExpenseCategoryArrowWrapper(animation) }>
			<ChevronDown size={ 16 } color={ '#000' } />
		</Animated.View>
	)
})

export default FilterArrow