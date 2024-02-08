import React, { memo } from 'react'
import { TouchableNativeFeedback, View, Text } from 'react-native'

import moment from 'moment'

import { monthPeriod, weekPeriod, yearPeriod } from '../../../../constants/functionConstants'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'

import { styles } from './styles'

const FilterPeriod = memo(({ periodVisible, period, calendarVisible }) => {

    const [_, setPeriodVisible] = periodVisible
    const [__, setCalendarVisible] = calendarVisible
    const [___, periodDispatch] = period

    const getPeriod = period => {
        const todayDate = moment().format('MMMM DD, YYYY')

        switch (period) {
            case 'today' : return todayDate
            case 'this-week' : return `${weekPeriod(new Date()).format('MMMM DD, YYYY')} - ${todayDate}`
            case 'this-month' : return `${monthPeriod(new Date()).format('MMMM DD, YYYY')} - ${todayDate}`
            case 'this-year' : return `${yearPeriod(new Date()).format('MMMM DD, YYYY')} - ${todayDate}`
        }
    }

    const preinstalledPeriods = [
        { label: 'Today', period: getPeriod('today') , pressFunc: () => periodDispatch({ type: 'set-today' })},
        { label: 'This week', period: getPeriod('this-week'), pressFunc: () => periodDispatch({ type: 'set-week' })},
        { label: 'This month', period: getPeriod('this-month'), pressFunc: () => periodDispatch({ type: 'set-month' })},
        { label: 'This year', period: getPeriod('this-year'), pressFunc: () => periodDispatch({ type: 'set-year' })},
        { label: 'All time', period: 'Ꝏ', pressFunc: () => periodDispatch({ type: 'set-all-time' })}
    ]

    return (
        <View style={ styles.filterPeriodContainer }>
            <View>
                { preinstalledPeriods.map(({ label, period, pressFunc }) => (
                    <TouchableNativeFeedback onPress={ () => { pressFunc(); setPeriodVisible(false) } } key={ label }>
                        <View style={ styles.filterPreinstalledPeriod }>
                            <View style={ styles.filterPeriodPreinstalledWrapper }>
                                <Text style={ styles.filterPeriodPreinstalledLabel }>{ label }</Text>
                                <Text style={ styles.filterPeriodPreinstalledPeriod }>{ period }</Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                )) }
            </View>
            <View style={ styles.filterPeriodBetweenLine }></View>
            <TouchableNativeFeedback onPress={ () => { setCalendarVisible(true); setPeriodVisible(false) } }>
                <View style={ styles.filterCustomRange }>
                    <View style={ styles.filterCustomPeriodWrapper }>
                        <Text style={ styles.filterCustomPeriodLabel }>Custom range</Text>
                        <FontAwesomeIcon icon={ faCalendarDay } size={ 18 } color={ '#000' } style={{ opacity: 0.7 }}/>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}, () => true)

export default FilterPeriod