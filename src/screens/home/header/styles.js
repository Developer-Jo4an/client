import { DARK_GOLD_COLOR, DARK_GREEN_COLOR, GOLD_COLOR, GREEN_COLOR } from '../../../constants/styleConstants'
import { SCREEN_WIDTH } from '../../../constants/variableConstants'
import { StatusBar } from 'react-native'

export const styles = {
	headerContainer: {
		width: SCREEN_WIDTH,
		paddingTop: StatusBar.currentHeight + 10,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 10,
		backgroundColor: '#fff',

		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20
	},
	headerWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 10
	},
	headerUserInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10
	},
	headerNicknameSubLvlWrapper: {
		gap: 5,
		alignItems: 'flex-start'
	},
	headerNicknameClickUI: {
		borderRadius: 10,

		overflow: 'hidden',
	},
	headerNicknameClickUIView: {
		justifyContent: 'center',
		alignItems: 'center',

		paddingTop: 2,
		paddingBottom: 5,
		paddingLeft: 4,
		paddingRight: 4,
	},

	headerSubLvlValueContainer: {
		borderRadius: 10,

		overflow: 'hidden'
	},
	headerBtns: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10
	},
	headerBtnContainer: {
		borderRadius: 20,
		overflow: 'hidden',
	},
	headerBtnWrapper: {
		width: 40,
		height: 40,

		justifyContent: 'center',
		alignItems: 'center',
	}
}