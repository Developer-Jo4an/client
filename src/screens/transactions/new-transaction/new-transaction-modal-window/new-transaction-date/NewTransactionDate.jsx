import { memo } from 'react'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'

import { newTransactionDateToggleAction } from '../../../../../redux/slices/new-transaction/newTransactionSlice'

import { MemoizedArrowBtn } from '../../../../../UI/buttons/arrow-btn/ArrowBtn'

import NewTransactionDateValue from './new-transaction-date-value/NewTransactionDateValue'

import NewTransactionTimeValue from './new-transaction-time-value/NewTransactionTimeValue'

import { styles } from './styles'

const NewTransactionDate = memo(() => {
	const dispatch = useDispatch()

	return (
		<View style={ styles.newTransactionDate }>
			<MemoizedArrowBtn size={ 18 } color={ '#000' } direction={ 'left' } callback={ () => dispatch(newTransactionDateToggleAction('subtract')) } />
			<View style={ styles.newTransactionDateInfoWrapper }>
				<NewTransactionDateValue />
				<NewTransactionTimeValue />
			</View>
			<MemoizedArrowBtn size={ 18 } color={ '#000' } direction={ 'right' } callback={ () => dispatch(newTransactionDateToggleAction('add')) } />
		</View>
	)
})
export default NewTransactionDate