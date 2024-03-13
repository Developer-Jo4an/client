import React, { useEffect, useRef } from 'react'
import { Animated, Easing, Pressable, View } from 'react-native'

import { Portal } from '@gorhom/portal'

import { OPACITY_BACKGROUND } from '../../../constants/styleConstants'

import { Plus } from 'lucide-react-native'

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
                    <Pressable onPress={ callback } android_ripple={{ color: OPACITY_BACKGROUND }}>
                        <View style={ styles.fixedAddBtnSign }>
                            <Plus size={ 22 } color={ '#fff' } />
                        </View>
                    </Pressable>
                </View>
            </View>
        </Portal>
    )
}

export default FixedAddBtn