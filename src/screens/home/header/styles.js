import { DARK_GOLD_COLOR, DARK_GREEN_COLOR, GOLD_COLOR, GREEN_COLOR } from '../../../constants/styleConstants'
import { SCREEN_WIDTH } from '../../../constants/variableConstants'
import {StatusBar} from 'react-native';

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
	headerAvatarWrapper: subLvl => ({
		padding: 2,

		borderStyle: 'solid',
		borderWidth: 2,
		borderColor: subLvl === 'Standard' ? GREEN_COLOR : GOLD_COLOR,
		borderRadius: 32,

		overflow: 'hidden'
	}),
	headerAvatar: {
		width: 60,
		height: 60,

		borderRadius: 30,
	},
	headerAvatarClickUI: {
		position: 'absolute',
		top: 2,
		left: 2,

		borderRadius: 30,
		overflow: 'hidden'
	},
	headerAvatarClickUIView: {
		width: 60,
		height: 60,
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
	headerNicknameValue: {
		fontWeight: 600,
		fontSize: 18
	},
	headerSubLvlValueContainer: {
		borderRadius: 10,

		overflow: 'hidden'
	},
	subLvlColor: subLvl => subLvl === 'Standard' ? [GREEN_COLOR, DARK_GREEN_COLOR] : [GOLD_COLOR, DARK_GOLD_COLOR],
	headerSubLvlValueWrapper: {
		paddingTop: 4,
		paddingLeft: 12,
		paddingRight: 12,
		paddingBottom: 4,
	},
	headerSubLvlValue: {
		color: '#fff',
		fontWeight: 600,
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