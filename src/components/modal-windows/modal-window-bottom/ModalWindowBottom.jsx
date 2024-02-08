import React, { useEffect } from 'react'
import { Animated, Keyboard, Pressable } from 'react-native'

import { Portal } from '@gorhom/portal'
import { useAnimation } from '../../../hooks/useAnimation'

import { styles } from './styles'

const ModalWindowBottom = ({ visible, contentHeight, hostName, ...props }) => {

    const [isVisible, setVisible] = visible

    const [animation, animationFunction] = useAnimation(visible)

    const duration = contentHeight / 2.3

    useEffect(() => {
        animationFunction(duration)
        if (!isVisible) Keyboard.dismiss()
    }, [isVisible])

    return (
        <Portal hostName={ hostName }>
            <Animated.View style={ styles.modalWindowBottom(isVisible, animation) }>
                <Pressable onPress={ () => setVisible(false) } style={ styles.modalWindowBottomCloseField }></Pressable>
                <Animated.View style={ styles.modalWindowBottomContent(animation, contentHeight) }>
                    { props.children }
                </Animated.View>
            </Animated.View>
        </Portal>
    )
}

export default ModalWindowBottom