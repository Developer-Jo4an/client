import { GRAY_BACKGROUND } from '../../../../../../constants/styleConstants'

export const styles = {
	typeOptionButtonWrapper: isActive => ({
		borderRadius: 12,

		overflow: 'hidden',

		backgroundColor: isActive ? GRAY_BACKGROUND : 'transparent',
	}),
	typeOptionValue: {
		fontWeight: 600
	},
	typeOptionButton: {
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 12,
		paddingRight: 12,
	}
}