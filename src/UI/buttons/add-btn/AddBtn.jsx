import React from 'react'
import { View, Text, Pressable } from 'react-native'

import { OPACITY_BACKGROUND } from '../../../constants/styleConstants'

import { Plus } from 'lucide-react-native'

import { styles } from './styles'

const AddBtn = ({ callback }) => {
	return (
		<View style={ styles.addBtnContainer }>
			<Pressable onPress={ callback } android_ripple={{ color: OPACITY_BACKGROUND }}>
				<View style={ styles.addBtnWrapper } >
					<Text style={ styles.addBtnText }>Add</Text>
					<Plus size={ 18 } color={ '#fff' } />
				</View>
			</Pressable>
		</View>
	)
}

export default AddBtn