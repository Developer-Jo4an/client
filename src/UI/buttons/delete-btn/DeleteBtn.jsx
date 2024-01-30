import React from 'react'
import { TouchableNativeFeedback, View } from 'react-native'
import { Shadow } from 'react-native-shadow-2'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { RED_COLOR, SHADOW } from '../../../constants/styleConstants'

import { styles } from './styles'

const DeleteBtn = ({ callback }) => {
	return (
		<Shadow style={ styles.deleteBtnContainer } distance={ 5 } startColor={ SHADOW }>
			<TouchableNativeFeedback onPress={ callback }>
				<View style={ styles.deleteBtnWrapper }>
					<FontAwesomeIcon icon={ faTrash } size={ 22 } color={ RED_COLOR } />
				</View>
			</TouchableNativeFeedback>
		</Shadow>
	)
}

export default DeleteBtn