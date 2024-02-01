import { SCREEN_WIDTH } from '../../constants/variableConstants'
import { GREEN_COLOR, GREEN_OPACITY_COLOR, OPACITY_BACKGROUND } from '../../constants/styleConstants'

export const styles = {
    navigationContainer: {

    },
	navigationWrapper: {
		width: SCREEN_WIDTH,

		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 0,

		padding: 20,
	},
	navigationItem: (activeRoute, route) => ({
		flexDirection: 'row',
		gap: activeRoute === route ? 8 : 0,
		alignItems: 'center',

		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 14,
		paddingRight: 14,

		borderRadius: 20,

		backgroundColor: activeRoute === route ? GREEN_OPACITY_COLOR : OPACITY_BACKGROUND
	}),

	navigationItemText: (activeRouteName, route) => ({
		width: activeRouteName === route ? 'auto' : 0,
		height: activeRouteName === route ? 'auto' : 0,

		fontWeight: 600,

		color: GREEN_COLOR,
	})
}