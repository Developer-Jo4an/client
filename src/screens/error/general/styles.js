import { GREEN_COLOR } from '../../../constants/styleConstants'

export const styles = {
	errorContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 20
	},
	errorInfo: {
		color: GREEN_COLOR,
		fontSize: 24,
		textAlign: 'center',

		paddingLeft: 20,
		paddingRight: 20
	},
	errorReloadBtnContainer: {
		borderRadius: 25,
		overflow: 'hidden'
	},
	errorReloadBtnWrapper: {
		width: 50,
		height: 50,

		justifyContent: 'center',
		alignItems: 'center',

		backgroundColor: GREEN_COLOR,
		borderRadius: 25,
		overflow: 'hidden'
	}
}