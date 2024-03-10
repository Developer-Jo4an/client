import React, { memo } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { filterTimeRangeDefaultSelector } from '../../../../redux/slices/filter-slice/filterSlice'

import CustomRange from "./custom-range/CustomRange"
import DefaultRange from './default-range/DefaultRange'

import { styles } from './styles'

const MemoizedDefaultRange = memo(DefaultRange, (prev, next) => prev.status === next.status)
const MemoizedCustomRange = memo(CustomRange)
const RangeModalWindow = () => {
    const defaultRanges = useSelector(filterTimeRangeDefaultSelector)

    const defaultRangesComponents = () =>
        Object.values(defaultRanges).map(({ status, range, label }) =>
            <MemoizedDefaultRange key={ label.toString() } status={ status } range={ range } label={ label } />)

    return (
        <View style={ styles.rangeModalWindowContainer }>
            { defaultRangesComponents() }
            <MemoizedCustomRange />
        </View>

    )
}

export default RangeModalWindow