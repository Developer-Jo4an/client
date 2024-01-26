import { SCREEN_WIDTH } from '../../../constants/variableConstants'
import { GOLD_COLOR, GREEN_COLOR } from '../../../constants/styleConstants'

export const styles = {
	actualContainer: {
		width: SCREEN_WIDTH - 20,

		borderRadius: 20,

		backgroundColor: '#fff'
	},
	actualHeader: {
		paddingLeft: 20,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
	},
	actualHeaderValue: {
		fontSize: 24,
		fontWeight: 600,
	},
	actualListWrapper: {
		paddingBottom: 10,
	},
	actualList: {
		gap: 10,

		paddingLeft: 10,
		paddingRight: 10
	},
	actualWrapper: subLvl => ({
		borderRadius: 31,
		padding: 2,

		borderWidth: 2,
		borderStyle: 'solid',
		borderColor: subLvl === 'Standard' ? GREEN_COLOR : GOLD_COLOR
	}),
	actualImg: {
		width: 120,
		height: 120,

		borderRadius: 30
	},
	actualClickUI: {
		position: 'absolute',
		top: 2,
		left: 2,

		borderRadius: 30,
		overflow: 'hidden'
	},
	actualClickUIView: {
		width: 120,
		height: 120,
	}
}