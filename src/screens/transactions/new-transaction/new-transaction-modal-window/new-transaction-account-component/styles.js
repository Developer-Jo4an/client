import { GRAY_BACKGROUND, GRAY_OPACITY_COLOR } from '../../../../../constants/styleConstants'

export const styles = {
	newTransactionAccountComponent: {
		borderRadius: 12,

		overflow: 'hidden',

		backgroundColor: GRAY_BACKGROUND
	},
	newTransactionAccountComponentBtn: {
		flexDirection: 'row',
		alignItems: 'center',

		paddingLeft: 10,
		paddingRight: 12,
		paddingTop: 8,
		paddingBottom: 8,
	},
	newTransactionAccountComponentSignContainer: animation => ({
		borderRadius: 5,

		overflow: 'hidden',

		marginRight: animation.interpolate({
			inputRange: [0, 1],
			outputRange: [14, 10]
		})
	}),
	newTransactionAccountComponentSignWrapper: {
		padding: 5,
	},
	newTransactionAccountComponentInfo: {
		alignItems: 'flex-start'
	},
	newTransactionAccountComponentName: animation => ({
		fontSize: 12,

		fontWeight: 600,

		color: animation.interpolate({
			inputRange: [0, 1],
			outputRange: ['#000', '#fff']
		})
	}),
	newTransactionAccountComponentCount: animation => ({
		fontSize: 12,

		color: animation.interpolate({
			inputRange: [0, 1],
			outputRange: [GRAY_OPACITY_COLOR, '#fff']
		}),

		fontWeight: 600
	})
}