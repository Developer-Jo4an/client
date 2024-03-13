import { memo, useState } from 'react'
import { Pressable, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { newTransactionAddDateAction, newTransactionDateSelector } from '../../../../../../redux/slices/new-transaction/newTransactionSlice'
import { Clock } from 'lucide-react-native'
import moment from 'moment'

import NewTransactionTimeValueText from './NewTransactionTimeValueText'
import NewTransactionTimepicker from './NewTransactionTimepicker'

import { OPACITY_BACKGROUND } from '../../../../../../constants/styleConstants'

import { styles } from '../styles'

const NewTransactionTimeValue = memo(() => {
	const dispatch = useDispatch()
	const newTransactionDateState = useSelector(newTransactionDateSelector)

	const [isVisibleTimepicker, setVisibleTimepicker] = useState(false)

	const setNewTransactionTime = ({ type }, date) => {
		setVisibleTimepicker(false)

		if (type === 'dismissed') return

		const [hour, minute] = moment(date).format('HH:mm').split(':').map(time => +time)
		const newDate = moment(newTransactionDateState).set({ hour, minute })._d
		dispatch(newTransactionAddDateAction(newDate))
	}

	return (
		<View style={ styles.newTransactionDateButtonWrapper }>
			<Pressable
				android_ripple={{ color: OPACITY_BACKGROUND }}
				onPress={ () => setVisibleTimepicker(true) }
				style={ styles.newTransactionDateButton }
			>
				<Clock size={ 18 } color={ '#000' } />
				<NewTransactionTimeValueText date={ newTransactionDateState } />
			</Pressable>
			<NewTransactionTimepicker
				isVisible={ isVisibleTimepicker }
				date={ newTransactionDateState }
				callback={ setNewTransactionTime }
			/>
		</View>
	)
})

export default NewTransactionTimeValue