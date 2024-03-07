import { SCREEN_WIDTH } from '../../../constants/variableConstants'

export const styles = {
	totalContainer: {
		width: SCREEN_WIDTH - 20,

		flexDirection: 'row',
		justifyContent: 'space-between',

		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 20,
		paddingRight: 20,

		borderRadius: 20,
		backgroundColor: '#fff'
	},
	totalHeader: {

	},
	totalHeaderValue: {
		fontSize: 24,
		fontWeight: 600
	},
	totalInfo: {
		gap: 5,
		alignItems: 'flex-end',
	},
	totalInfoValue: {
		color: 'lightgray'
	}
}