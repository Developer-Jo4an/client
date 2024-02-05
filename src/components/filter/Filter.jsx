import React from 'react'
import { TouchableNativeFeedback, View } from 'react-native'

import ModalWindowBottom from '../modal-windows/modal-window-bottom/ModalWindowBottom'
import FilterDateInfo from './filter-date-info/FilterDateInfo'

import { useAppContext } from '../../../AppProvider'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Calendar } from 'react-native-calendars'
import { faSliders } from '@fortawesome/free-solid-svg-icons'

import { styles } from './styles'

const Filter = () => {

    const { filterDateVisible, filterDate } = useAppContext()

    return (
        <View style={ styles.filterContainer }>
            <View style={ styles.filterWrapper }>
                <View style={ styles.filterSelectDate }>
                    <FilterDateInfo filterDateVisible={ filterDateVisible } filterDate={ filterDate } />
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