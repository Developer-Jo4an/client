import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../constants/variableConstants'

export const styles = {
	modalWindowBottom: (animation, isVisible) => ({
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT,

		justifyContent: 'flex-end',

		position: 'absolute',
		bottom: 0,
		pointerEvents: isVisible ? 'auto' : 'none',

		backgroundColor: animation.interpolate({
			inputRange: [0, 1],
			outputRange: ['rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 0.6)']
		})
	}),
	newAccountModalWindowCloseSpace: {
		flexGrow: 1,

		backgroundColor: 'red'
	},
	modalWindowBottomWrapper: (animation, contentHeight) => ({
		transform: [{
			translateY: animation.interpolate({
				inputRange: [0, 1],
				outputRange: [contentHeight, 0]
			})
		}]
	})
}