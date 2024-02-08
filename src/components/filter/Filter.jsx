import React, { memo } from 'react'
import { TouchableNativeFeedback, View } from 'react-native'

import ModalWindowBottom from '../modal-windows/modal-window-bottom/ModalWindowBottom'
import FilterDateInfo from './filter-date-info/FilterDateInfo'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'

import { styles } from './styles'

const Filter = memo(({ periodVisible, period }) => {

    return (
        <View style={ styles.filterContainer }>
            <View style={ styles.filterWrapper }>
                <View style={ styles.filterSelectDate }>
                    <FilterDateInfo periodVisible={ periodVisible } period={ period } />
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
})

export default Filter