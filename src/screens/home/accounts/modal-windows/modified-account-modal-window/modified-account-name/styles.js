import { SCREEN_WIDTH } from '../../../../../../constants/variableConstants'
import { GREEN_COLOR } from '../../../../../../constants/styleConstants'

export const styles = {
	modifiedAccountNameInputWrapper: {
		alignItems: 'center',
	},
	modifiedAccountNameInput: {
		width: SCREEN_WIDTH - 20,
		height: 60,

		borderRadius: 12,

		borderWidth: 2,
		borderStyle: 'solid',
		borderColor: GREEN_COLOR,

		paddingLeft: 14,
		paddingRight: 14
	}
}