import { useEffect } from 'react'
import { Pressable, Animated } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { useAnimation } from '../../hooks/useAnimation'

import { styles } from './styles'

const ColorCircle = ({ colors, callback, isActive }) => {

	const [animation, animationFunc] = useAnimation(+isActive)

	useEffect(() => animationFunc(100), [isActive])

	return (
		<Animated.View style={ styles.colorCircleContainer(animation) }>
			<Pressable style={ styles.colorCircleWrapper } onPress={ () => callback(colors) }>
				<LinearGradient colors={ colors } start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 1 }}>
					<Animated.View style={ styles.colorCircle(animation) }></Animated.View>
				</LinearGradient>
			</Pressable>
		</Animated.View>
	)
}

export default ColorCircle