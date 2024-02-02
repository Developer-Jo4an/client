import { GREEN_COLOR } from '../../../../../../constants/styleConstants'

export const styles = {
	newAccountTypeContainer: {
		alignItems: 'center'
	},
	newAccountTypeWrapper: {
		flexDirection: 'row',

		borderRadius: 20,

		backgroundColor: '#fff',

		overflow: 'hidden'
	},
	newAccountTypeToggle: {
		width: 60,
		height: 50,

		justifyContent: 'center',
		alignItems: 'center',
	},
	newAccountTypeTextCash: animation => ({
		fontWeight: 600,

		color: animation.interpolate({ inputRange: [0, 1], outputRange: ['#fff', '#000'] })
	}),
	newAccountTypeTextCard: animation => ({
		fontWeight: 600,

		color: animation.interpolate({ inputRange: [0, 1], outputRange: ['#000', '#fff'] })
	}),
	newAccountFocus: animation => ({
		width: 60,
		height: 50,

		position: 'absolute',
		top: 0,
		left: 0,
		transform: [{ translateX: animation.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 60]
		}) }],

		borderRadius: 20,

		backgroundColor: GREEN_COLOR
	})
}