export const styles = {
	colorCircleContainer: animation => ({
		padding: animation.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 2]
		}),

		borderWidth: animation.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 2]
		}),

		borderRadius: 99,

		borderStyle: 'solid',
		borderColor: '#000'
	}),
	colorCircleWrapper: {
		borderRadius: 22.5,

		overflow: 'hidden'
	},
	colorCircle: animation => ({
		width: animation.interpolate({
			inputRange: [0, 1],
			outputRange: [45, 37]
		}),
		height: animation.interpolate({
			inputRange: [0, 1],
			outputRange: [45, 37]
		})
	})
}