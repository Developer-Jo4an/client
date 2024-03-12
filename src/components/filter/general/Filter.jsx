import { Pressable, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { toggleIsOptionsMWVisibleAction, toggleIsRangeMWVisibleAction, toggleTimeRangeAction } from '../../../redux/slices/filter-slice/filterSlice'

import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import FilterRangeValue from "../filter-range-value/FilterRangeValue"
import FilterModalWindowsWrapper from "../modal-windows/general/FilterModalWindowsWrapper"

import { OPACITY_BACKGROUND } from '../../../constants/styleConstants'

import { styles } from './styles'

const Filter = () => {
	const dispatch = useDispatch()

	const toggleRange = action => dispatch(toggleTimeRangeAction(action))

	const showOptionModalWindow = () => dispatch(toggleIsOptionsMWVisibleAction())

	return (
        <View style={ styles.filterContainer }>
            <View style={ styles.filterRangeWrapper }>
                <View style={ styles.filterRangeInfo }>
                    <Pressable
                        style={ styles.filterRange }
                        android_ripple={{ color: OPACITY_BACKGROUND }}
                        onPress={ () => dispatch(toggleIsRangeMWVisibleAction()) }
                    >
                        <Entypo name={ 'calendar' } size={ 20 } color={ '#000' } />
                        <FilterRangeValue />
                    </Pressable>
                </View>
                <View style={ styles.filterBtnWrapper }>
                    <Pressable
	                    style={ styles.filterArrowBtn }
	                    android_ripple={{ color: OPACITY_BACKGROUND }}
	                    onPress={ () => toggleRange('subtract') }
                    ><MaterialIcons name={ 'keyboard-arrow-left' } size={ 20 } color={ '#000' } />
                    </Pressable>
                </View>
                <View style={ styles.filterBtnWrapper }>
                    <Pressable
	                    style={ styles.filterArrowBtn }
	                    android_ripple={{ color: OPACITY_BACKGROUND }}
	                    onPress={ () => toggleRange('add') }
                    ><MaterialIcons name={ 'keyboard-arrow-right' } size={ 20 } color={ '#000' } />
                    </Pressable>
                </View>
            </View>
            <View style={ styles.filterBtnWrapper }>
                <Pressable
	                style={ styles.filterOptionsBtn }
	                android_ripple={{ color: OPACITY_BACKGROUND }}
	                onPress={ showOptionModalWindow }
                ><Ionicons name={ 'options' } size={ 20 } color={ '#000' } />
                </Pressable>
            </View>
            <FilterModalWindowsWrapper />
        </View>
    )
}

export default Filter