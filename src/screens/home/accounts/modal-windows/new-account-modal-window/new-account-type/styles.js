import { GREEN_COLOR } from '../../../../../../constants/styleConstants'

export const styles = {
	newAccountTypeContainer: {
		alignItems: 'center',
	},
	newAccountTypeShadow: {
		borderRadius: 20,

		overflow: 'hidden'
	},
	newAccountTypeWrapper: {
		flexDirection: 'row',

		backgroundColor: '#fff',
	},
	newAccountTypeBtn: {
		width: 70,
		height: 50,

		justifyContent: 'center',
		alignItems: 'center',

		zIndex: 2
	},
	newAccountBtnValue: (animation, type) => ({
		color: animation.interpolate({
			inputRange: [0, 1],
			outputRange: type === 'card' ? ['#fff', GREEN_COLOR] : [GREEN_COLOR, '#fff']
		}),
		fontWeight: 600
	}),
	newAccountTypeIndicator: animation => ({
		width: 70,
		height: 50,

		position: 'absolute',
		top: 0,
		left: animation.interpolate({
			inputRange: [0, 1],
			outputRange: [70, 0]
		}),
		zIndex: 1,

		borderRadius: 20,

		backgroundColor: GREEN_COLOR
	})
}