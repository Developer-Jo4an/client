import React from 'react'
import { TouchableNativeFeedback, View, Text } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { styles } from './styles'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AddBtn = ({ callback }) => {
	return (
		<View style={ styles.addBtnContainer }>
			<TouchableNativeFeedback onPress={ callback }>
				<View style={ styles.addBtnWrapper } >
					<Text style={ styles.addBtnText }>Add</Text>
					<FontAwesomeIcon icon={ faPlus } size={ 16 } color={ '#fff' }/>
				</View>
			</TouchableNativeFeedback>
		</View>
	)
}

export default AddBtn