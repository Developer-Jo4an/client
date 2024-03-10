import { Text } from 'react-native'
import { useSelector } from 'react-redux'

import { filterTimeRangeCustomSelector, filterTimeRangeDefaultSelector } from '../../../redux/slices/filter-slice/filterSlice'
import { formattedRange } from '../../../constants/functionConstants'

import { styles } from './styles'

const FilterRangeValue = () => {
    const defaultRange = useSelector(filterTimeRangeDefaultSelector)
    const customRange = useSelector(filterTimeRangeCustomSelector)

    const formattedRangeText = () => {
        if (customRange.length) return formattedRange(customRange)

        const activeRange = Object.entries(defaultRange).find(([_, { status }]) => !!status)

        if (activeRange[0] === 'allTime') return '∞'

        return formattedRange(activeRange[1].range)
    }

    return <Text style={ styles.filterRangeValue }>{ formattedRangeText() }</Text>

}

export default FilterRangeValue