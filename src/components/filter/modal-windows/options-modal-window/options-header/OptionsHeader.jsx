import { Pressable, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { toggleIsOptionsMWVisibleAction } from '../../../../../redux/slices/filter-slice/filterSlice'

import { OPACITY_BACKGROUND } from '../../../../../constants/styleConstants'

import { X } from 'lucide-react-native'

import { styles } from './styles'

const OptionsHeader = () => {
	const dispatch = useDispatch()

	return (
		<View style={ styles.optionsModalWindowHeader }>
			<View style={ styles.optionModalWindowBtnWrapper }>
				<Pressable
					style={ styles.optionModalWindowBtn }
					android_ripple={{ color: OPACITY_BACKGROUND }}
					onPress={ () => dispatch(toggleIsOptionsMWVisibleAction()) }
				><X size={ 24 } color={ '#000' } />
				</Pressable>
			</View>
			<Text style={ styles.optionsModalWindowHeaderValue }>Filter</Text>
		</View>
	)
}

export default OptionsHeader