import React, { useEffect } from 'react'

import { Portal } from '@gorhom/portal'
import { useAnimation } from '../../../hooks/useAnimation'
import { Keyboard, Animated, Pressable, View } from 'react-native'

import { styles } from './styles'

const ModalWindowCenter = ({ visible, contentWidth, hostName, ...props }) => {

    const [isVisible, setVisible] = visible

    const [animation, animationFunction] = useAnimation(visible)
    useEffect(() => {
        animationFunction(200)
        if (!isVisible) Keyboard.dismiss()
    }, [isVisible])

    return (
        <Portal hostName={ hostName }>
            <Animated.View style={ styles.modalWindowCenter(isVisible, animation) }>
                <Pressable onPress={ () => setVisible(false) } style={ styles.modalWindowCenterWrapper }>
                    <View style={ styles.modalWindowCenterContent(contentWidth) }>
                        { props.children }
                    </View>
                </Pressable>
            </Animated.View>
        </Portal>
    )
}

export default ModalWindowCenter