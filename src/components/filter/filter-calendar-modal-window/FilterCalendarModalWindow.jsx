import React from 'react'

import { Calendar } from 'react-native-calendars'
import ModalWindowCenter from '../../modal-windows/modal-window-center/ModalWindowCenter'

import moment from 'moment/moment'

import { SCREEN_WIDTH } from '../../../constants/variableConstants'
import { GREEN_COLOR, GREEN_OPACITY_COLOR } from '../../../constants/styleConstants'

import { styles } from './styles'

const FilterCalendarModalWindow = ({ datepickerVisible, filterDate }) => {

	const [isDatepickerVisible, setFilterDateVisible] = datepickerVisible
	const [filterDateState, dispatchFilterDate] = filterDate

	const calendarMarkedDates = () => {
		const startDate = moment(filterDateState[0])
		const startDateObject = { [startDate.format('YYYY-MM-DD')] : { color: GREEN_COLOR, textColor: '#fff', selected: true } }

		const endDate = moment(filterDateState[1])
		const endDateObject = { [endDate.format('YYYY-MM-DD')] : { color: GREEN_COLOR, textColor: '#fff' } }

		const betweenDatesArray = []

		let currentDate = startDate.clone().add('1', 'day')
		while (currentDate < endDate) {
			const key = currentDate.format('YYYY-MM-DD')

			betweenDatesArray.push({ [key]: { color: GREEN_OPACITY_COLOR, textColor: '#fff' } })
			currentDate.add('1', 'day')
		}

		const betweenDatesObj = betweenDatesArray.reduce((acc, date) => ({ ...acc, ...date }), {})

		return {
			...startDateObject,
			...betweenDatesObj,
			...endDateObject
		}
	}

	const calendarDatePress = date => {

	}


	return (
		<ModalWindowCenter visible={ datepickerVisible } contentWidth={ SCREEN_WIDTH - 40 }>
			<Calendar
				style={{ borderRadius: 20, overflow: 'hidden' }}
				markingType={ 'period' }
				onDayPress={ calendarDatePress }
				markedDates={ calendarMarkedDates() }
			/>
		</ModalWindowCenter>
	)
}

export default FilterCalendarModalWindow