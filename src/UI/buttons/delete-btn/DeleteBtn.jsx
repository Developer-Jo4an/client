import React from 'react'
import { Pressable, View } from 'react-native'
import { Shadow } from 'react-native-shadow-2'

import { OPACITY_BACKGROUND, RED_COLOR, SHADOW } from '../../../constants/styleConstants'

import { Trash2 } from 'lucide-react-native'

import { styles } from './styles'

const DeleteBtn = ({ callback }) => {

	return (
		<Shadow style={ styles.deleteBtnContainer } distance={ 5 } startColor={ SHADOW }>
			<Pressable onPress={ callback } android_ripple={{ color: OPACITY_BACKGROUND }}>
				<View style={ styles.deleteBtnWrapper }>
					<Trash2 size={ 24 } color={ RED_COLOR } />
				</View>
			</Pressable>
		</Shadow>
	)
}

export default DeleteBtn