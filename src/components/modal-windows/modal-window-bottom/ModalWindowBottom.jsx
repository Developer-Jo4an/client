import React, { useEffect } from 'react'
import { Animated, Keyboard, Pressable } from 'react-native'

import { Portal } from '@gorhom/portal'
import { useAnimation } from '../../../hooks/useAnimation'

import { styles } from './styles'

const ModalWindowBottom = ({ visible, contentHeight, hostName, closeCallback, ...props }) => {

    const [animation, animationFunction] = useAnimation(visible)

    useEffect(() => {
        animationFunction(220)
        if (!visible) Keyboard.dismiss()
    }, [visible])

    return (
        <Portal hostName={ hostName }>
            <Animated.View style={ styles.modalWindowBottom(visible, animation) }>
                <Pressable onPress={ closeCallback } style={ styles.modalWindowBottomCloseField }></Pressable>
                <Animated.View style={ styles.modalWindowBottomContent(animation, contentHeight) }>
                    { props.children }
                </Animated.View>
            </Animated.View>
        </Portal>
    )
}

export default ModalWindowBottom