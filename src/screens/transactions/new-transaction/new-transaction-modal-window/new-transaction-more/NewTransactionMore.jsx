import { useEffect, useRef } from 'react'
import { Animated, View } from 'react-native'
import { useSelector } from 'react-redux'

import { newTransactionTypeSelector } from '../../../../../redux/slices/new-transaction/newTransactionSlice'

import NewTransactionMoreExpense from './new-transaction-more-expense/NewTransactionMoreExpense'
import NewTransactionMoreIncome from './new-transaction-more-income/NewTransactionMoreIncome'
import NewTransactionMoreTransfer from './new-transaction-more-transfer/NewTransactionMoreTransfer'

import { EXPENSE_TYPE, INCOME_TYPE } from '../../../../../constants/variableConstants'

import { styles } from './styles'

const NewTransactionMore = () => {
	const newTransactionTypeState = useSelector(newTransactionTypeSelector)

	const animationCondition = () => newTransactionTypeState === EXPENSE_TYPE ? 0 : newTransactionTypeState === INCOME_TYPE ? 1 : 2

	const slideAnimation = useRef(new Animated.Value(animationCondition())).current

	useEffect(() => {
		Animated.timing(slideAnimation, {
			toValue: animationCondition(),
			duration: 100,
			useNativeDriver: false
		}).start()
	}, [newTransactionTypeState])

	return (
		<View style={ styles.newTransactionMore }>
			<Animated.View style={ styles.newTransactionMoreWrapper(slideAnimation) }>
				<NewTransactionMoreExpense />
				<NewTransactionMoreIncome />
				<NewTransactionMoreTransfer />
			</Animated.View>
		</View>
	)
}

export default NewTransactionMore