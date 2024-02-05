import React, { useEffect, useRef } from 'react'
import { Animated, Easing, TouchableNativeFeedback, View } from 'react-native'

import { Portal } from '@gorhom/portal'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { styles } from './styles'

const FixedAddBtn = ({ callback, position, hostName }) => {

    const animation = useRef(new Animated.Value(0)).current

    const startPulse = () => {
        animation.setValue(0)
        Animated.timing(animation, {
            toValue: 1,
            duration: 4000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(() => startPulse())
    }

    useEffect(() => startPulse(), [])

    return (
        <Portal hostName={ hostName }>
            <View style={ styles.fixedAddBtnContainer(position) }>
                <Animated.View style={ styles.fixedAddBtnPulse(animation) }></Animated.View>
                <View style={ styles.fixedAddBtnWrapper }>
                    <TouchableNativeFeedback onPress={ callback }>
                        <View style={ styles.fixedAddBtnSign }>
                            <FontAwesomeIcon icon={ faPlus } size={ 22 } color={ '#fff' } />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </Portal>
    )
}

export default FixedAddBtn