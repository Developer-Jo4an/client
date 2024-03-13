import { SCREEN_WIDTH } from '../../../../../constants/variableConstants'

export const styles = {
	newTransactionMore: {
		overflowX: 'hidden'
	},
	newTransactionMoreWrapper: animation => ({
		flexDirection: 'row',

		position: 'absolute',

		left: animation.interpolate({
			inputRange: [0, 1, 2],
			outputRange: [0, -SCREEN_WIDTH, -2 * SCREEN_WIDTH]
		})
	})
}