import { GREEN_COLOR, ORANGE_COLOR, RED_COLOR } from '../../constants/styleConstants'

export const styles = {
	accountContainer: {
		borderRadius: 10,

		overflow: 'hidden',

		backgroundColor: '#fff',
	},
	accountWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 10,

		padding: 10,
	},
	accountLeftPart: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,

		flexShrink: 1,

		overflow: 'hidden'
	},
	accountSignContainer: {
		width: 40,
		height: 28,

		justifyContent: 'center',
		alignItems: 'center',

		borderRadius: 10,

		overflow: 'hidden'
	},
	accountNameValue: {

	},
	accountCountContainer: {
		flexShrink: 0
	},
	accountCountValue: count => ({
		color: count === 0 ? ORANGE_COLOR : count > 0 ? GREEN_COLOR : RED_COLOR
	})
}