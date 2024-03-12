import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { toggleCategoriesTypeAction } from '../../../../../../redux/slices/filter-slice/filterSlice'

import { OPACITY_BACKGROUND } from '../../../../../../constants/styleConstants'

import { styles } from './styles'

const TypeOptionButton = ({ type, typeLabel, isActive }) => {
	const dispatch = useDispatch()

	return (
		<View style={ styles.typeOptionButtonWrapper(isActive) }>
			<Pressable
				android_ripple={{ color: OPACITY_BACKGROUND }}
				style={ styles.typeOptionButton }
				onPress={ () => dispatch(toggleCategoriesTypeAction(type)) }
			><Text style={ styles.typeOptionValue }>{ typeLabel }</Text>
			</Pressable>
		</View>
	)
}

export default TypeOptionButton