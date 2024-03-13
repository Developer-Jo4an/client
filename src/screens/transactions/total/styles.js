import { SCREEN_WIDTH } from '../../../constants/variableConstants'
import {
	GRAY_COLOR,
	GREEN_COLOR,
	GREEN_ULTRA_OPACITY_COLOR,
	ORANGE_COLOR,
	RED_COLOR
} from '../../../constants/styleConstants'

export const styles = {
	transactionTotalContainer: {
		width: SCREEN_WIDTH - 20,

		backgroundColor: GREEN_ULTRA_OPACITY_COLOR,

		padding: 20,

		borderRadius: 20,
	},
	transactionsTotalInfoWrapper: {
		gap: 5,

		paddingBottom: 10,

		borderBottomWidth: 2,
		borderBottomStyle: 'solid',
		borderBottomColor: GRAY_COLOR,

		boxSizing: 'border-box'
	},
	transactionsTotalInfoPart: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	transactionsTotalInfoPartAction: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
	},
	transactionsTotalInfoPartActionText: {
		fontSize: 16,
	},
	transactionsTotalInfoPartActionValue: transferType => ({
		color: transferType === 'expense' ? RED_COLOR : GREEN_COLOR,

		fontSize: 16
	}),
	transactionsTotalWrapper: {
		paddingTop: 10,
	},
	transactionsTotal: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	transactionsTotalText: {
		fontSize: 18,

		fontWeight: 600
	},
	transactionsTotalValue: count => ({
		fontSize: 18,

		color: count === 0 ? ORANGE_COLOR : count > 0 ? GREEN_COLOR : RED_COLOR
	})
}