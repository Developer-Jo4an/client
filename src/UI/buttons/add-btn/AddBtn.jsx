import React from 'react'
import { View, Text, Pressable } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'

import { OPACITY_BACKGROUND } from '../../../constants/styleConstants'

import { styles } from './styles'

const AddBtn = ({ callback }) => {
	return (
		<View style={ styles.addBtnContainer }>
			<Pressable onPress={ callback } android_ripple={{ color: OPACITY_BACKGROUND }}>
				<View style={ styles.addBtnWrapper } >
					<Text style={ styles.addBtnText }>Add</Text>
					<AntDesign name={ 'plus' } size={ 16 } color={ '#fff' } />
				</View>
			</Pressable>
		</View>
	)
}

export default AddBtn