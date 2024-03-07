import { useRef } from 'react'
import { Animated } from 'react-native'

export const useAnimation = isAnimation => {
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