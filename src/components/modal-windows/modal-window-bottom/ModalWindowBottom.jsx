import React, { memo, useEffect, useRef } from 'react'
import { Animated, Keyboard, Pressable } from 'react-native'

import { useAnimation } from '../../../hooks/useAnimation'

import { styles } from './styles'

const ModalWindowBottom = ({ visible, contentHeight, ...props }) => {

	const [isVisible, setVisible] = visible

	const keyboardStatus = useRef(false)


	useEffect(() => {
		Keyboard.addListener('keyboardDidShow', () => keyboardStatus.current = true)
		Keyboard.addListener('keyboardDidHide', () => keyboardStatus.current = false)

		return () => {
			Keyboard.removeAllListeners('keyboardDidShow')
			Keyboard.removeAllListeners('keyboardDidHide')
		}
	}, [])

	const closeMW = () => {
		if (keyboardStatus.current) Keyboard.dismiss()
		else setVisible(false)
	}

	const [animation, animationFunction] = useAnimation(visible)
	useEffect(() => animationFunction(isVisible ? 150 : 250), [isVisible])

	return (
		<Animated.View style={ styles.modalWindowBottom(animation, isVisible) }>
			<Pressable onPress={ closeMW } style={{ flexGrow: 1 }}></Pressable>
			<Animated.View style={ styles.modalWindowBottomWrapper(animation, contentHeight) }>
				{ props.children }
			</Animated.View>
		</Animated.View>
	)
}

const MemoizedModalWindowBottom = memo(ModalWindowBottom, (prev, next) => prev.visible[0] === next.visible[0])

export { ModalWindowBottom, MemoizedModalWindowBottom }