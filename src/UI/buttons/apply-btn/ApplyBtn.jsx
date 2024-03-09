import React from 'react'
import { Pressable, View } from 'react-native'
import { Shadow } from 'react-native-shadow-2'

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

import { GREEN_COLOR, OPACITY_BACKGROUND, SHADOW } from '../../../constants/styleConstants'

import { styles } from './styles'

const ApplyBtn = ({ callback }) => {

    return (
        <Shadow style={ styles.applyBtnContainer } distance={ 5 } startColor={ SHADOW }>
            <Pressable onPress={ callback } android_ripple={{ color: OPACITY_BACKGROUND }}>
                <View style={ styles.applyBtnWrapper }>
                    <FontAwesome6 name={ 'check' } size={ 22 } color={ GREEN_COLOR } />
                </View>
            </Pressable>
        </Shadow>
    )
}

export default ApplyBtn