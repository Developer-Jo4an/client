import { useDispatch } from 'react-redux'
import { Pressable, Text, View } from 'react-native'

import { formattedRange } from '../../../../../constants/functionConstants'
import Feather from 'react-native-vector-icons/Feather'
import {
    setAllTimeRangeAction,
    setHalfYearRangeAction,
    setMonthRangeAction,
    setTodayRangeAction,
    setWeekRangeAction,
    setYearRangeAction
} from '../../../../../redux/slices/filter-slice/filterSlice'

import { GREEN_COLOR, OPACITY_BACKGROUND } from '../../../../../constants/styleConstants'

import { styles } from './styles'

const DefaultRange = ({ status, range, label }) => {
    const dispatch = useDispatch()

    const rangeSwitch = label => {
        switch (label) {
            case 'Today': { dispatch(setTodayRangeAction()); return }
            case 'Week': { dispatch(setWeekRangeAction()); return }
            case 'Month': { dispatch(setMonthRangeAction()); return }
            case 'Half year': { dispatch(setHalfYearRangeAction()); return }
            case 'Year': { dispatch(setYearRangeAction()); return }
            case 'All time': { dispatch(setAllTimeRangeAction()); return }
        }
    }

    return (
        <Pressable
            style={ styles.defaultRangeInfoContainer }
            android_ripple={{ color: OPACITY_BACKGROUND }}
            onPress={ () => rangeSwitch(label) }
        >
            <View style={ styles.defaultRangeInfo }>
                <Text style={ styles.defaultRangeName(status) }>{ label.toString() }</Text>
                <Text style={ styles.defaultRangeValue(status) }>{ label !== 'All time' ? formattedRange(range) : '∞' }</Text>
            </View>
            <View style={ styles.defaultRangeCheck(status) }>
                <Feather name={ 'check' } size={ 22 } color={ GREEN_COLOR } />
            </View>
        </Pressable>
    )
}

export default DefaultRange