import React, { memo } from 'react'
import { View } from 'react-native'

import { Calendar } from 'react-native-calendars'
import moment from 'moment'

import { CALENDAR_THEME } from '../../../../constants/styleConstants'
import { EXTERNAL_DATE_SETTINGS, EXTREME_DATE_SETTINGS, ZERO_TIME } from '../../../../constants/variableConstants'

import { styles } from './styles'

const FilterCalendar = memo(({ filterPeriod, calendarPeriod }) => {

    const [_, filterPeriodDispatch] = filterPeriod
    const [calendarPeriodState, calendarPeriodDispatch] = calendarPeriod

    const setDate = date => {
        const periodCountDates = Object.keys(calendarPeriodState).length

        if (!periodCountDates || periodCountDates !== 1) {
            calendarPeriodDispatch({
                type: 'set-start-date',
                startDate: { [date.dateString] : EXTERNAL_DATE_SETTINGS }
            })
            filterPeriodDispatch({ type: 'set-date', date: moment(date.dateString) })
            return
        }

        const prevDate = moment(Object.keys(calendarPeriodState)[0]).set(ZERO_TIME)
        const nowDate = moment(date.dateString).set(ZERO_TIME)

        const [start, end] = prevDate.isBefore(nowDate) ? [prevDate, nowDate] : [nowDate, prevDate]

        const betweenDates = []

        let startCloneDate = start.clone().add(1, 'day')
        while (startCloneDate.isBefore(end)) {
            betweenDates.push({ [startCloneDate.format('YYYY-MM-DD')] : EXTREME_DATE_SETTINGS })
            startCloneDate.add(1, 'day')
        }

        const betweenDatesObject = betweenDates.reduce((acc, date) => ({ ...date, ...acc }), {})

        calendarPeriodDispatch({
            type: 'set-rest-dates',
            restDates: {
                [start.format('YYYY-MM-DD')] : EXTERNAL_DATE_SETTINGS,
                ...betweenDatesObject,
                [end.format('YYYY-MM-DD')] : EXTERNAL_DATE_SETTINGS
            }
        })
        filterPeriodDispatch({ type: 'set-period', dates: [start, end] })
    }

    return (
        <View style={ styles.filterCalendarWrapper }>
            <Calendar
                markingType={ 'period' }
                theme={ CALENDAR_THEME }
                markedDates={ calendarPeriodState }
                onDayPress={ setDate }
            />
        </View>
    )
}, (prev, next) => {
    const prevPeriod = Object.entries(prev.calendarPeriod[0])
    const nextPeriod = Object.entries(next.calendarPeriod[0])

    return prevPeriod.length === nextPeriod.length
})

export default FilterCalendar