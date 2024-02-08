import React, { memo } from 'react'
import { Text, TouchableNativeFeedback, View } from 'react-native'

import FilterDateArrows from './FilterDateArrows'

import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { compareDates } from '../../../constants/functionConstants'

import { styles } from './styles'

const FilterDateInfo = memo(({ periodVisible, period }) => {

    const [_, setPeriodVisible] = periodVisible
    const [periodState, __] = period


    const formattedDate = date => {
        const [startDate, endDate] = date

        if (startDate.isSame(moment('1970-01-01'))) return 'Ꝏ'

        const result = moment(startDate).isSame(moment(endDate), 'day')

        if (result) return startDate.format('DD.MM.YY')
        return `${startDate.format('DD.MM.YY')} - ${endDate.format('DD.MM.YY')}`
    }

    return (
        <View style={ styles.filterPeriodContainer }>
            <View style={ styles.filterPeriodWrapper }>
                <TouchableNativeFeedback onPress={ () => setPeriodVisible(true) }>
                    <View style={ styles.filterPeriodInfo }>
                        <FontAwesomeIcon icon={ faCalendar } size={ 22 } color={ '#000' }/>
                        <Text numberOfLines={ 1 } ellipsizeMode={ 'clip' } style={ styles.filterDateInfo }>{ formattedDate(periodState) }</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <FilterDateArrows />
        </View>
    )
}, (prev, next) =>
    (
        compareDates(prev.period[0], next.period[0]) &&
        compareDates(prev.period[1], next.period[1])
    )
)

export default FilterDateInfo