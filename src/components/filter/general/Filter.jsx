import { Pressable, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { toggleIsOptionsMWVisibleAction, toggleIsRangeMWVisibleAction, toggleTimeRangeAction } from '../../../redux/slices/filter-slice/filterSlice'

import FilterRangeValue from "../filter-range-value/FilterRangeValue"
import FilterModalWindowsWrapper from "../modal-windows/general/FilterModalWindowsWrapper"

import { OPACITY_BACKGROUND } from '../../../constants/styleConstants'

import { Calendar, ChevronRight, SlidersHorizontal, ChevronLeft } from 'lucide-react-native'

import { styles } from './styles'
import ArrowBtn from '../../../UI/buttons/arrow-btn/ArrowBtn';

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
	                    <Calendar size={ 22 } color={ '#000' } />
                        <FilterRangeValue />
                    </Pressable>
                </View>
	            <ArrowBtn size={ 18 } color={ '#000' } direction={ 'left' } callback={ () => toggleRange('subtract') } />
	            <ArrowBtn size={ 18 } color={ '#000' } direction={ 'right'} callback={ () => toggleRange('add') } />
            </View>
            <View style={ styles.filterBtnWrapper }>
                <Pressable
	                style={ styles.filterOptionsBtn }
	                android_ripple={{ color: OPACITY_BACKGROUND }}
	                onPress={ showOptionModalWindow }
                ><SlidersHorizontal size={ 20 } color={ '#000' }/>
                </Pressable>
            </View>
            <FilterModalWindowsWrapper />
        </View>
    )
}

export default Filter