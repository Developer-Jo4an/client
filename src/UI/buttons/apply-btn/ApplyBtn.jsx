import React from 'react'
import { TouchableNativeFeedback, View } from 'react-native'
import { Shadow } from 'react-native-shadow-2'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { GREEN_COLOR, SHADOW } from '../../../constants/styleConstants'

import { styles } from './styles'

const ApplyBtn = ({ callback }) => {
    return (
        <Shadow style={ styles.applyBtnContainer } distance={ 5 } startColor={ SHADOW }>
            <TouchableNativeFeedback onPress={ callback }>
                <View style={ styles.applyBtnWrapper }>
                    <FontAwesomeIcon icon={ faCheck } size={ 22 } color={ GREEN_COLOR } />
                </View>
            </TouchableNativeFeedback>
        </Shadow>
    )
}

export default ApplyBtn