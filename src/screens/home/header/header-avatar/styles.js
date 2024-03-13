import { GOLD_COLOR, GREEN_COLOR } from '../../../../constants/styleConstants'

export const styles = {
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

		justifyContent: 'center',
		alignItems: 'center',

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
}