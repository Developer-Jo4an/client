import React from 'react'
import { TouchableNativeFeedback, View } from 'react-native'
import { Shadow } from 'react-native-shadow-2'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { RED_COLOR, SHADOW } from '../../../constants/styleConstants'

import { styles } from './styles'

const CancelBtn = ({ callback }) => {
	return (
		<Shadow style={ styles.cancelBtnContainer } distance={ 5 } startColor={ SHADOW }>
			<TouchableNativeFeedback onPress={ callback }>
				<View style={ styles.cancelBtnWrapper }>
					<FontAwesomeIcon icon={ faXmark } size={ 22 } color={ RED_COLOR } />
				</View>
			</TouchableNativeFeedback>
		</Shadow>
	)
}

export default CancelBtn