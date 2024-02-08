import React, { memo } from 'react'
import { TouchableNativeFeedback, View } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { styles } from './styles'

const FilterDateArrows = memo(() => {
    return (
        <View style={ styles.filterPeriodArrowsContainer }>
            <View style={ styles.filterPeriodArrowWrapper }>
                <TouchableNativeFeedback>
                    <View style={ styles.filterPeriodArrowSign }>
                        <FontAwesomeIcon icon={ faAngleLeft } size={ 16 } color={ '#000' } />
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={ styles.filterPeriodArrowWrapper }>
                <TouchableNativeFeedback>
                    <View style={ styles.filterPeriodArrowSign }>
                        <FontAwesomeIcon icon={ faAngleRight } size={ 16 } color={ '#000' } />
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}, () => true)

export default FilterDateArrows