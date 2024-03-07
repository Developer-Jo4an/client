import { useRef } from 'react'
import { TextInput, View } from 'react-native'

import { styles } from './styles'

const ModifiedAccountCount = () => {

	const countInputRef = useRef()

	return (
		<View style={ styles.modifiedAccountCountInputWrapper }>
			<TextInput
				ref={ countInputRef }
				style={ styles.modifiedAccountCountInput }
				placeholder={ 'Count' }
				keyboardType={ 'numeric' }
				onChangeText={ text => {} }
			/>
		</View>
	)
}

export default ModifiedAccountCount