import { useRef, memo } from 'react'
import { TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { newTransactionAddAmountAction, newTransactionAmountSelector } from '../../../../../redux/slices/new-transaction/newTransactionSlice'

import { GRAY_COLOR } from '../../../../../constants/styleConstants'

import { styles } from './styles'

const NewTransactionCount = memo(() => {
	const dispatch = useDispatch()

	const newTransactionCountValue = useSelector(newTransactionAmountSelector)

	const countInputRef = useRef()

	return (
		<View style={ styles.newTransactionCount }>
			<TextInput
				ref={ countInputRef }
				style={ styles.newTransactionCountInput }
				placeholder={ '0 USD' }
				selectionColor={ GRAY_COLOR }
				value={ newTransactionCountValue }
				onChangeText={ sum => dispatch(newTransactionAddAmountAction(sum)) }
				keyboardType={ 'numeric' }
				maxLength={ 14 }
			/>
		</View>
	)
})

export default NewTransactionCount