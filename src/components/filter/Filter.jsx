import React from 'react'
import { TouchableNativeFeedback, View, Text } from 'react-native'
import DatePicker from 'react-native-date-picker'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendar, faSliders } from '@fortawesome/free-solid-svg-icons'

import { styles } from './styles'
import FilterDateInfo from './filter-date-info/FilterDateInfo';

const Filter = () => {
    return (
        <View style={ styles.filterContainer }>
            <View style={ styles.filterWrapper }>
                <View style={ styles.filterSelectDate }>
                    <TouchableNativeFeedback>
                        <View style={ styles.filterDateWrapper }>
                            <FontAwesomeIcon icon={ faCalendar } size={ 22 } color={ '#000' }/>
                            <FilterDateInfo />
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={ styles.filterSelectSort }>
                    <TouchableNativeFeedback>
                        <View style={ styles.filterSortWrapper }>
                            <FontAwesomeIcon icon={ faSliders } size={ 22 } color={ '#000' } />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    )
}

export default Filter