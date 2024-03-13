import { memo, useState } from 'react'
import { Pressable, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { newTransactionAddDateAction, newTransactionDateSelector } from '../../../../../../redux/slices/new-transaction/newTransactionSlice'
import { Calendar } from 'lucide-react-native'
import moment from 'moment'

import NewTransactionDateValueText from './NewTransactionDateValueText'
import NewTransactionDatepicker from './NewTransactionDatepicker'

import { OPACITY_BACKGROUND } from '../../../../../../constants/styleConstants'

import { styles } from '../styles'

const NewTransactionDateValue = memo(() => {
	const dispatch = useDispatch()

	const newTransactionDateState = useSelector(newTransactionDateSelector)

	const [isVisibleDatepicker, setVisibleDatepicker] = useState(false)

	const setNewTransactionDate = ({ type }, date) => {
		setVisibleDatepicker(false)

		if (type === 'dismissed') return

		const [hour, minute] = moment(newTransactionDateState).format('HH:mm').split(':').map(time => +time)
		const newDate = moment(date).set({ hour, minute })._d
		dispatch(newTransactionAddDateAction(newDate))
	}

	return (
		<View style={ styles.newTransactionDateButtonWrapper }>
			<Pressable
				android_ripple={{ color: OPACITY_BACKGROUND }}
				onPress={ () => setVisibleDatepicker(true) }
				style={ styles.newTransactionDateButton }
			>
				<Calendar size={ 18 } color={ '#000' } />
				<NewTransactionDateValueText date={ newTransactionDateState } />
			</Pressable>
			<NewTransactionDatepicker
				isVisible={ isVisibleDatepicker }
				date={ newTransactionDateState }
				callback={ setNewTransactionDate }
			/>
		</View>
	)
})

export default NewTransactionDateValue