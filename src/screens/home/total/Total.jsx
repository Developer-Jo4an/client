import React from 'react'
import { View, Text } from 'react-native'

import TotalCount from './total-count/TotalCount'

import { styles } from './styles'

const Total = () => {

	return (
		<View style={ styles.totalContainer }>
			<View style={ styles.totalHeader }><Text style={ styles.totalHeaderValue }>Total</Text></View>
			<View style={ styles.totalInfo }>
				<TotalCount />
				<Text style={ styles.totalInfoValue }>Sum of all cards</Text>
			</View>
		</View>
	)
}

export default Total