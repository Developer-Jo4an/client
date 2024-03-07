import React from 'react'
import { Pressable, View } from 'react-native'
import { Shadow } from 'react-native-shadow-2'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { OPACITY_BACKGROUND, RED_COLOR, SHADOW } from '../../../constants/styleConstants'

import { styles } from './styles'

const CancelBtn = ({ callback }) => {
	return (
		<Shadow style={ styles.cancelBtnContainer } distance={ 5 } startColor={ SHADOW }>
			<Pressable onPress={ callback } android_ripple={{ color: OPACITY_BACKGROUND }}>
				<View style={ styles.cancelBtnWrapper }>
					<FontAwesome name={ 'xmark' } size={ 22 } color={ RED_COLOR } />
				</View>
			</Pressable>
		</Shadow>
	)
}

export default CancelBtn