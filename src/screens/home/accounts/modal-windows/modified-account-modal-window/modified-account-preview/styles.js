import { SCREEN_WIDTH } from '../../../../../../constants/variableConstants'

export const styles = {
	modifiedAccountPreviewContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 10,

		paddingLeft: 10,
		paddingRight: 10,
	},
	modifiedAccountShadow: {
		width: SCREEN_WIDTH - 180,

		borderRadius: 10,
	}
}