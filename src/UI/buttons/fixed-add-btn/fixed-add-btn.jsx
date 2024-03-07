import React, { useEffect, useRef } from 'react'
import { Animated, Easing, Pressable, View } from 'react-native'

import { Portal } from '@gorhom/portal'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

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
                    <Pressable onPress={ callback } android_ripple={{ color: 'rgba(0, 0, 0, 0)'}}>
                        <View style={ styles.fixedAddBtnSign }>
                            <FontAwesome name={ 'plus' } size={ 22 } color={ '#fff' } />
                        </View>
                    </Pressable>
                </View>
            </View>
        </Portal>
    )
}

export default FixedAddBtn