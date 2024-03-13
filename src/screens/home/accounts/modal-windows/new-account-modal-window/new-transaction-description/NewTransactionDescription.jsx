import { useRef } from 'react'
import { TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { newTransactionAddDescriptionAction } from '../../../../../../redux/slices/new-transaction/newTransactionSlice'

import { GRAY_COLOR } from '../../../../../../constants/styleConstants'

import { styles } from './styles'

const NewTransactionDescription = () => {
	const dispatch = useDispatch()

	const descriptionInputRef = useRef()

	return (
		<View style={ styles.newTransactionDescription }>
			<TextInput
				ref={ descriptionInputRef }
				style={ styles.newTransactionDescriptionInput }
				placeholder={ 'Note' }
				selectionColor={ GRAY_COLOR }
				onChangeText={ text => dispatch(newTransactionAddDescriptionAction(text)) }
				maxLength={ 30 }
			/>
			<View style={ styles.newTransactionDescriptionBorder }></View>
		</View>
	)
}

export default NewTransactionDescription