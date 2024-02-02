import React from 'react'
import { Text } from 'react-native'

import { useAppContext } from '../../../../AppProvider'
import { formattedDate } from '../../../constants/functionConstants'

import { styles } from '../styles'

const FilterDateInfo = () => {

    const { filterDate } = useAppContext()
    const [filterDateValue, setFilterDateValue] = filterDate

    return (
        <Text style={ styles.filterDateInfo }>{ formattedDate(filterDateValue) }</Text>
    )
}

export default FilterDateInfo