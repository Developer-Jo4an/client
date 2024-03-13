import React from 'react'
import { Pressable, View } from 'react-native'
import { Shadow } from 'react-native-shadow-2'

import { GREEN_COLOR, OPACITY_BACKGROUND, SHADOW } from '../../../constants/styleConstants'

import { Check } from 'lucide-react-native'

import { styles } from './styles'

const ApplyBtn = ({ callback }) => {

    return (
        <Shadow style={ styles.applyBtnContainer } distance={ 5 } startColor={ SHADOW }>
            <Pressable onPress={ callback } android_ripple={{ color: OPACITY_BACKGROUND }}>
                <View style={ styles.applyBtnWrapper }>
	                <Check size={ 24 } color={ GREEN_COLOR } />
                </View>
            </Pressable>
        </Shadow>
    )
}

export default ApplyBtn