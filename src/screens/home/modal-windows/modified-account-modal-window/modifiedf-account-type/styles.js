import { GREEN_COLOR } from '../../../../../constants/styleConstants'

export const styles = {
	modifiedAccountTypeContainer: {
		alignItems: 'center'
	},
	modifiedAccountTypeWrapper: {
		flexDirection: 'row',

		borderRadius: 20,

		backgroundColor: '#fff',

		overflow: 'hidden'
	},
	modifiedAccountTypeToggle: {
		width: 60,
		height: 50,

		justifyContent: 'center',
		alignItems: 'center',
	},
	modifiedAccountTypeTextCash: animation => ({
		fontWeight: 600,

		color: animation.interpolate({ inputRange: [0, 1], outputRange: ['#fff', '#000'] })
	}),
	modifiedAccountTypeTextCard: animation => ({
		fontWeight: 600,

		color: animation.interpolate({ inputRange: [0, 1], outputRange: ['#000', '#fff'] })
	}),
	modifiedAccountFocus: animation => ({
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