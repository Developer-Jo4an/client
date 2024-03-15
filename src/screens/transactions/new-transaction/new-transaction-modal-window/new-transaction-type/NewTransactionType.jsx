import { memo } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { newTransactionTypeSelector } from '../../../../../redux/slices/new-transaction/newTransactionSlice'

import TransactionTypeBtn from './transaction-type-btn/TransactionTypeBtn'

import {
	EXPENSE_LABEL,
	EXPENSE_TYPE,
	INCOME_LABEL,
	INCOME_TYPE, TRANSFER_LABEL,
	TRANSFER_TYPE
} from '../../../../../constants/variableConstants'

import { styles } from './styles'

const MemoizedTransactionTypeButton = memo(TransactionTypeBtn, (prev, next) => prev.isActive === next.isActive)

const NewTransactionType = memo(() => {
	const newTransactionTypeState = useSelector(newTransactionTypeSelector)

	const buttonsArray = [
		{ type: EXPENSE_TYPE, typeLabel: EXPENSE_LABEL },
		{ type: INCOME_TYPE, typeLabel: INCOME_LABEL },
		{ type: TRANSFER_TYPE, typeLabel: TRANSFER_LABEL }
	]

	return (
		<View style={ styles.newTransactionType }>
			{ buttonsArray.map(({ type, typeLabel }) => {
				const isActive = newTransactionTypeState.includes(type)
				return <MemoizedTransactionTypeButton key={ type } type={ type } typeLabel={ typeLabel } isActive={ isActive } />
			})}
		</View>
	)
})

export default NewTransactionType