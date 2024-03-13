import React from 'react'
import { Text, Pressable, View } from 'react-native'

import { OPACITY_BACKGROUND } from '../../../constants/styleConstants'

import { RefreshCcw } from 'lucide-react-native'

import { styles } from './styles'

const Error = ({ error, reloadFunction }) => {

	return (
		<View style={ styles.errorContainer }>
			<Text style={ styles.errorInfo }>{ error.message }</Text>
			<View style={ styles.errorReloadBtnContainer }>
				<Pressable android_ripple={{ color: OPACITY_BACKGROUND }} onPress={ reloadFunction }>
					<View style={ styles.errorReloadBtnWrapper }>
						<RefreshCcw size={ 34 } color={ '#fff' }/>
					</View>
				</Pressable>
			</View>
		</View>
	)
}

export default Error