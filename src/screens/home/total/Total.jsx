import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

const Total = ({ accounts }) => {

	const amount = accounts.reduce((acc, account) => acc + account.count, 0).toFixed(2)

	return (
		<View style={ styles.totalContainer }>
			<View style={ styles.totalHeader }><Text style={ styles.totalHeaderValue }>Total</Text></View>
			<View style={ styles.totalInfo }>
				<Text style={ styles.totalAmount(amount) }>{ amount } $</Text>
				<Text style={ styles.totalInfoValue }>Sum of all cards</Text>
			</View>
		</View>
	)
}

export default Total