import React from 'react'
import { Text, TouchableNativeFeedback, View } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'

import { styles } from './styles'

const Error = ({ error, reloadFunction }) => {

	return (
		<View style={ styles.errorContainer }>
			<Text style={ styles.errorInfo }>{ error }</Text>
			<View style={ styles.errorReloadBtnContainer }>
				<TouchableNativeFeedback background={TouchableNativeFeedback.Ripple()} onPress={ reloadFunction }>
					<View style={ styles.errorReloadBtnWrapper }>
						<FontAwesomeIcon icon={ faRotateRight } size={ 34 } color={ '#fff' } />
					</View>
				</TouchableNativeFeedback>
			</View>
		</View>
	)
}

export default Error