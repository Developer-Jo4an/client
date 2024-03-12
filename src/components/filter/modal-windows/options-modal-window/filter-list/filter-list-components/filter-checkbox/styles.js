import { GRAY_BACKGROUND, GREEN_COLOR } from '../../../../../../../constants/styleConstants'

export const styles = {
	filterSelectSign: (animation, callback) => ({
		width: 24,
		height: 24,

		pointerEvents: callback ? 'auto' : 'none',

		borderWidth: animation.interpolate({
			inputRange: [0, 1],
			outputRange: [2, 0]
		}),

		borderStyle: 'solid',
		borderColor: GRAY_BACKGROUND,
		borderRadius: 4,
		boxSizing: 'border-box',

		overflow: 'hidden',

		backgroundColor: animation.interpolate({
			inputRange: [0, 1],
			outputRange: ['#fff', GREEN_COLOR]
		})
	}),
	filterSelectSignBtn: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
}