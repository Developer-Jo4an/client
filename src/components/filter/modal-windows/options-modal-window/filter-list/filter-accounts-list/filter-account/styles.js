import { SCREEN_WIDTH } from '../../../../../../../constants/variableConstants'

export const styles = {
	filterAccount: {
		width: SCREEN_WIDTH - 10,

		borderRadius: 10,

		overflow: 'hidden',
	},
	filterAccountWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 5,

		paddingRight: 12,
	}
}