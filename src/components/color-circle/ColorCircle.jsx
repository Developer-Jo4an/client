import React, { memo, useEffect, useRef } from 'react'
import { View, Animated, TouchableNativeFeedback } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles'

const ColorCircle = ({ callback, colorList, state }) => {

    const result = state[0] === colorList[0] && state[1] === colorList[1]

    const animation = useRef(new Animated.Value(+result)).current

    useEffect(() => {
        Animated.timing(animation, {
            toValue: +result,
            duration: 200,
            useNativeDriver: false
        }).start()
    }, [state])

    return (
        <Animated.View style={ styles.colorCircleContainer(animation) }>
            <View style={ styles.newAccountColorGradientContainer }>
                <TouchableNativeFeedback
                    background={ TouchableNativeFeedback.Ripple('rgba(0, 0, 0, 0)') }
                    onPress={ () => callback(colorList) }
                >
                    <LinearGradient colors={ colorList } start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 1 }}>
                        <View style={ styles.colorCircleWrapper }></View>
                    </LinearGradient>
                </TouchableNativeFeedback>
            </View>
        </Animated.View>
    )
}

const MemoizedColorCircle = memo(ColorCircle, (prev, next) => {
    const prevState = prev.state
    const nextState = next.state
    const colors = prev.colorList

    return !(
        prevState[0] === colors[0] && prevState[1] === colors[1] ||
        nextState[0] === colors[0] && nextState[1] === colors[1]
    )
})

export { ColorCircle, MemoizedColorCircle }