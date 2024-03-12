import { GREEN_COLOR, ORANGE_COLOR, RED_COLOR } from '../../constants/styleConstants'

export const styles = {
	account: callback => ({
		borderRadius: 12,

		overflow: 'hidden',

		backgroundColor: '#fff',

		pointerEvents: callback ? 'auto' : 'none'
	}),
	accountWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: 20,

		padding: 12,
	},
	accountInfoLeftPart: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	accountSignWrapper: {
		borderRadius: 12,

		overflow: 'hidden',
	},
	accountSign: {
		justifyContent: 'center',
		alignItems: 'center',

		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 10,
		paddingRight: 10,
	},
	accountName: {

	},
	accountCount: color =>  ({
		color: color === 0 ? ORANGE_COLOR : color > 0 ? GREEN_COLOR : RED_COLOR
	})
}