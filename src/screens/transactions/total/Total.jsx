import { View, Text } from 'react-native'

import { ArrowUp, ArrowDown } from 'lucide-react-native'

import { styles } from './styles'

const Total = () => {

	const expenseValue = 100
	const incomeValue = 200
	const totalValue = incomeValue - expenseValue

	return (
		<View style={ styles.transactionTotalContainer }>
			<View style={ styles.transactionsTotalInfoWrapper }>
				<View style={ styles.transactionsTotalInfoPart }>
					<View style={ styles.transactionsTotalInfoPartAction }>
						<Text style={ styles.transactionsTotalInfoPartActionText }>Expense</Text>
						<ArrowDown size={ 14 } color={ '#000' } strokeWidth={ 3 } />
					</View>
					<Text style={ styles.transactionsTotalInfoPartActionValue('expense') }>{ expenseValue } $</Text>
				</View>
				<View  style={ styles.transactionsTotalInfoPart }>
					<View style={ styles.transactionsTotalInfoPartAction }>
						<Text style={ styles.transactionsTotalInfoPartActionText }>Income</Text>
						<ArrowUp size={ 14 } color={ '#000' } strokeWidth={ 3 } />
					</View>
					<Text style={ styles.transactionsTotalInfoPartActionValue('income') }>{ incomeValue } $</Text>
				</View>
			</View>
			<View style={ styles.transactionsTotalWrapper }>
				<View style={ styles.transactionsTotal }>
					<Text style={ styles.transactionsTotalText }>Total</Text>
					<Text style={ styles.transactionsTotalValue(totalValue) }>{ totalValue } $</Text>
				</View>
			</View>
		</View>
	)
}

export default Total