import { EXPENSE_TYPE, INCOME_TYPE, TRANSFER_TYPE } from '../../../../../constants/variableConstants'

export const styles = {
	newTransactionMore: {

	},
	newTransactionMoreWrapper: (animation, type, newTransactionTypeState) => ({
		height: type === newTransactionTypeState ? 'auto' : 0,

		transform: [{ translateX: animation.interpolate({
			inputRange: [0, 1, 2],
			outputRange: [
				newTransactionTypeState === EXPENSE_TYPE ? 0 : 20,
				newTransactionTypeState === INCOME_TYPE ? 0 : 20,
				newTransactionTypeState === TRANSFER_TYPE ? 0 : 20,
			]
		}) }]
	})
}