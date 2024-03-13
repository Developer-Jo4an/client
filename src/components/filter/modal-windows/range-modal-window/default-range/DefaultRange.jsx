import { useDispatch } from 'react-redux'
import { Pressable, Text, View } from 'react-native'

import { formattedRange } from '../../../../../constants/functionConstants'
import {
	ALL_TIME_LABEL,
	ALL_TIME_SIGN,
	HALF_YEAR_LABEL,
	MONTH_LABEL,
	setAllTimeRangeAction,
	setHalfYearRangeAction,
	setMonthRangeAction,
	setTodayRangeAction,
	setWeekRangeAction,
	setYearRangeAction,
	TODAY_LABEL,
	WEEK_LABEL,
	YEAR_LABEL
} from '../../../../../redux/slices/filter-slice/filterSlice'

import {GREEN_COLOR, OPACITY_BACKGROUND} from '../../../../../constants/styleConstants'

import { Check } from 'lucide-react-native'

import { styles } from './styles'

const DefaultRange = ({ status, range, label }) => {
    const dispatch = useDispatch()

    const rangeSwitch = label => {
        switch (label) {
            case TODAY_LABEL: { dispatch(setTodayRangeAction()); return }
            case WEEK_LABEL: { dispatch(setWeekRangeAction()); return }
            case MONTH_LABEL: { dispatch(setMonthRangeAction()); return }
            case HALF_YEAR_LABEL: { dispatch(setHalfYearRangeAction()); return }
            case YEAR_LABEL: { dispatch(setYearRangeAction()); return }
            case ALL_TIME_LABEL: { dispatch(setAllTimeRangeAction()); return }
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
                <Text style={ styles.defaultRangeValue(status) }>{ label !== ALL_TIME_LABEL ? formattedRange(range) : ALL_TIME_SIGN }</Text>
            </View>
            <View style={ styles.defaultRangeCheck(status) }>
	            <Check size={ 24 } color={ status ? GREEN_COLOR : '#fff' } />
            </View>
        </Pressable>
    )
}

export default DefaultRange