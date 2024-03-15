import {GRAY_BACKGROUND, GRAY_OPACITY_COLOR} from '../../../../../constants/styleConstants'

export const styles = {
	newTransactionCategoryComponent: (isSelect, color) => ({
		borderRadius: 12,

		overflow: 'hidden',

		backgroundColor: isSelect ? color : GRAY_BACKGROUND
	}),
	newTransactionCategoryComponentBtn: {
		flexDirection: 'row',
		alignItems: 'center',

		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 12,
		paddingRight: 12
	},
	newTransactionCategoryComponentSignContainer: animation => ({
		borderRadius: 5,

		overflow: 'hidden',

		marginRight: animation.interpolate({
			inputRange: [0, 1],
			outputRange: [14, 10]
		})
	}),
	newTransactionCategoryComponentSignWrapper: (isSelect, color) => ({
		padding: 5,

		backgroundColor: isSelect ? 'transparent' : color,
	}),
	newTransactionCategoryName: animation => ({
		fontSize: 12,

		fontWeight: 600,

		color: animation.interpolate({
			inputRange: [0, 1],
			outputRange: ['#000', '#fff']
		})
	})
}