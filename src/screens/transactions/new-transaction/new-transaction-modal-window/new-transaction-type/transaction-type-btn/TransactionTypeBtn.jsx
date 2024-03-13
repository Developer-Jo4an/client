import { Pressable, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { newTransactionAddTypeAction } from '../../../../../../redux/slices/new-transaction/newTransactionSlice'

import { OPACITY_BACKGROUND } from '../../../../../../constants/styleConstants'

import { styles } from './styles'

const TransactionTypeBtn = ({ type, typeLabel, isActive }) => {
	const dispatch = useDispatch()

	return (
		<View style={ styles.transactionTypeButtonWrapper(isActive) }>
			<Pressable
				android_ripple={{ color: OPACITY_BACKGROUND }}
				style={ styles.transactionTypeBtn }
				onPress={ () => dispatch(newTransactionAddTypeAction(type)) }
			><Text style={ styles.transactionTypeValue }>{ typeLabel }</Text>
			</Pressable>
		</View>
	)
}

export default TransactionTypeBtn