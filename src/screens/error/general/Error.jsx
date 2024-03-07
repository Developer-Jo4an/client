import React from 'react'
import { Text, Pressable, View } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { OPACITY_BACKGROUND } from '../../../constants/styleConstants'

import { styles } from './styles'

const Error = ({ error, reloadFunction }) => {

	return (
		<View style={ styles.errorContainer }>
			<Text style={ styles.errorInfo }>{ error }</Text>
			<View style={ styles.errorReloadBtnContainer }>
				<Pressable android_ripple={{ color: OPACITY_BACKGROUND }} onPress={ reloadFunction }>
					<View style={ styles.errorReloadBtnWrapper }>
						<FontAwesome name={ 'rotateRight' } size={ 34 } color={ '#fff' } />
					</View>
				</Pressable>
			</View>
		</View>
	)
}

export default Error