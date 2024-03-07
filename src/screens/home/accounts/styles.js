import { SCREEN_WIDTH } from '../../../constants/variableConstants'
import { GREEN_COLOR } from '../../../constants/styleConstants'

export const styles = {
	accountsContainer: {
		width: SCREEN_WIDTH - 20,

		borderRadius: 20,

		backgroundColor: '#fff',
	},
	accountsHeader: {
		paddingLeft: 20,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,

		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	accountsHeaderValue: {
		fontSize: 24,
		fontWeight: 600,
	},
	addAccountBtnWrapper: {
		overflow: 'hidden',

		borderRadius: 20,

		backgroundColor: GREEN_COLOR,

		padding: 20
	}

}