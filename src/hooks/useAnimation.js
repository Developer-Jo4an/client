import { useRef } from 'react'
import { Animated } from 'react-native'

export const useAnimation = state => {
	const [isAnimation, _] = state
	const animation = useRef(new Animated.Value(+isAnimation)).current

	const animationFunction = duration => {
		Animated.timing(animation, {
			toValue: +isAnimation,
			duration: duration,
			useNativeDriver: false
		}).start()
	}

	return [animation, animationFunction]
}