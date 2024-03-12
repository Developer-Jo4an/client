import React, { memo, useEffect } from 'react'
import { Animated, Pressable } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import { useAnimation } from '../../../../../../../hooks/useAnimation'

import { styles } from './styles'

const FilterCheckbox = memo(({ isSelect, callback }) => {
	const [animation, animationFunc] = useAnimation(isSelect)

	useEffect(() => animationFunc(200), [isSelect])

	return (
		<Animated.View style={ styles.filterSelectSign(animation, callback) }>
			<Pressable style={ styles.filterSelectSignBtn } onPress={ callback ? callback : () => {} } hitSlop={{ left: 15, right: 15, bottom: 15, top: 15 }}>
				<Feather name={ 'check' } size={ 16 } color={ '#fff' } />
			</Pressable>
		</Animated.View>
	)
}, (prev, next) => prev.isSelect === next.isSelect)

export default FilterCheckbox