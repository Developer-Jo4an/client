import { SCREEN_WIDTH } from '../../../constants/variableConstants'

export const styles = {
	accountsAccounts: {
		width: SCREEN_WIDTH - 20,
		padding: 10,

		backgroundColor: '#fff',

		borderRadius: 20,

		gap: 10,
	},
	accountsHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',

		paddingLeft: 10,
	},
	accountsHeaderValue: {
		fontSize: 24,

		fontWeight: 600
	}
}