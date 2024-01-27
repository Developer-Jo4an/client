import React, { useEffect, useRef } from 'react'
import { Animated, Keyboard, Pressable } from 'react-native'

import { useAnimation } from '../../../hooks/useAnimation'

import { styles } from './styles'

const ModalWindowBottom = ({ visible, ...props }) => {

	const [isVisible, setVisible] = visible

	const keyboardStatus = useRef(false)
	Keyboard.addListener('keyboardDidShow', () => keyboardStatus.current = true)
	Keyboard.addListener('keyboardDidHide', () => keyboardStatus.current = false)

	const closeMW = () => {
		if (keyboardStatus.current) Keyboard.dismiss()
		else setVisible(false)
	}

	const [animation, animationFunction] = useAnimation(visible)
	useEffect(() => animationFunction(isVisible ? 200 : 300), [isVisible])

	return (
		<Animated.View style={ styles.modalWindowBottom(animation, isVisible) }>
			<Pressable onPress={ closeMW } style={{ flexGrow: 1 }}></Pressable>
			<Animated.View style={ styles.modalWindowBottomWrapper(animation) }>
				{ props.children }
			</Animated.View>
		</Animated.View>
	)
}

export default ModalWindowBottom