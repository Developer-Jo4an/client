import React, { memo } from 'react'
import { Text, TouchableNativeFeedback, View } from 'react-native'

import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { compareDates } from '../../../constants/functionConstants'

import { styles } from '../styles'

const FilterDateInfo = memo(({ filterDateVisible, filterDate }) => {

    const [isFilterDateVisible, setFilterDateVisible] = filterDateVisible
    const [filterDateValue, setFilterDateValue] = filterDate


    const formattedDate = date => {
        const [startDate, endDate] = date

        const result = moment(startDate).isSame(moment(endDate), 'day')

        if (result) return new Date(startDate).toLocaleDateString()
        return `${new Date(startDate).toLocaleDateString()} - ${new Date(endDate).toLocaleDateString()}`
    }

    return (
        <TouchableNativeFeedback onPress={ () => setFilterDateVisible(true) }>
            <View style={ styles.filterDateWrapper }>
                <FontAwesomeIcon icon={ faCalendar } size={ 22 } color={ '#000' }/>
                <Text style={ styles.filterDateInfo }>{ formattedDate(filterDateValue) }</Text>
            </View>
        </TouchableNativeFeedback>
    )
}, (prev, next) =>
    (
        prev.filterDateVisible[0] === next.filterDateVisible[1] &&
        compareDates(prev.filterDate[0], next.filterDate[0]) &&
        compareDates(prev.filterDate[1], next.filterDate[1])
    )
)

export default FilterDateInfo