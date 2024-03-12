import { SCREEN_WIDTH } from '../../../../../../constants/variableConstants'
import { GRAY_BACKGROUND } from '../../../../../../constants/styleConstants'

export const categoriesStyles = {
	filterExpensesList: {
		alignItems: 'center',
		gap: 5,
	},
	filterCategoryContainer: {
		width: SCREEN_WIDTH - 10,
	},
	filterCategory: isVisible => ({
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 10,

		paddingRight: 12,

		overflow: 'hidden',

		boxSizing: 'border-box',

		borderBottomWidth: +isVisible,
		borderBottomColor: GRAY_BACKGROUND,
		borderBottomStyle: 'solid'
	}),
	filterCategoryWrapper: {
		flexGrow: 1,

		overflow: 'hidden',

		borderRadius: 10,
	},
	filterCategoryButton: {
		flexGrow: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingRight: 10,
	},
	filterExpenseSubCategoriesList: isVisible => ({
		height: isVisible ? 'auto' : 0,

		overflow: 'hidden',

		paddingLeft: 30,

		borderBottomWidth: +isVisible,
		borderBottomColor: GRAY_BACKGROUND,
		borderBottomStyle: 'solid'
	}),
	filterExpenseSubCategory: {
		borderRadius: 10,

		overflow: 'hidden',

		borderBottomWidth: 1,
		borderBottomColor: GRAY_BACKGROUND,
		borderBottomStyle: 'solid',

		boxSizing: 'border-box'
	},
	filterExpenseSubCategoryBtn: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',

		paddingRight: 12
	}
}