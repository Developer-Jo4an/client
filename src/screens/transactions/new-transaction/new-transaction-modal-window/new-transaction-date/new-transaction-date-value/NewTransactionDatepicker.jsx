import { memo } from 'react'

import DateTimePicker from '@react-native-community/datetimepicker'

import moment from 'moment'

const NewTransactionDatepicker = memo(({ isVisible, date, callback }) => {
	return (
		<>
			{
				isVisible &&
				<DateTimePicker
					value={ date }
					mode={ 'date' }
					onChange={ callback }
					display={ 'spinner' }
				/>
			}
		</>
	)
}, (prev, next) => {
	return (
		prev.isVisible === next.isVisible &&
		moment(prev.date).isSame(moment(next.date))
	)
})

export default NewTransactionDatepicker