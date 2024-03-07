import { useRef } from 'react'
import { TextInput, View} from 'react-native'
import { useDispatch } from 'react-redux'

import { styles } from './styles'

const ModifiedAccountName = () => {
	const dispatch = useDispatch()

	const nameInputRef = useRef()

	return (
		<View style={ styles.modifiedAccountNameInputWrapper }>
			<TextInput
				ref={ nameInputRef }
				style={ styles.modifiedAccountNameInput }
				placeholder={ 'Name' }
				onChangeText={ text => {} }
			/>
		</View>
	)
}

export default ModifiedAccountName