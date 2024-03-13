import React, { memo, useEffect } from 'react'
import { Animated, Pressable } from 'react-native'

import { useAnimation } from '../../../../../../../hooks/useAnimation'

import { Check } from 'lucide-react-native'

import { styles } from './styles'

const FilterCheckbox = memo(({ isSelect, callback }) => {
	const [animation, animationFunc] = useAnimation(isSelect)

	useEffect(() => animationFunc(200), [isSelect])

	return (
		<Animated.View style={ styles.filterSelectSign(animation, callback) }>
			<Pressable style={ styles.filterSelectSignBtn } onPress={ callback ? callback : () => {} } hitSlop={{ left: 15, right: 15, bottom: 15, top: 15 }}>
				<Check size={ 18 } color={ '#fff' } />
			</Pressable>
		</Animated.View>
	)
}, (prev, next) => prev.isSelect === next.isSelect)

export default FilterCheckbox