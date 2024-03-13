import { GRAY_BACKGROUND } from '../../../../../../constants/styleConstants'

export const styles = {
	transactionTypeButtonWrapper: isActive => ({
		borderRadius: 12,

		overflow: 'hidden',

		backgroundColor: isActive ? GRAY_BACKGROUND : 'transparent',
	}),
	transactionTypeValue: {
		fontWeight: 600
	},
	transactionTypeBtn: {
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 12,
		paddingRight: 12,
	}
}