import { GREEN_COLOR } from '../../../constants/styleConstants'

export const styles = {
	addBtnContainer: {
		borderRadius: 20,

		backgroundColor: GREEN_COLOR,

		overflow: 'hidden'
	},
	addBtnWrapper: {
		flexDirection: 'row',
		gap: 5,
		alignItems: 'center',

		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 10,
		paddingRight: 10,
	},
	addBtnText: {
		color: '#fff',

		fontWeight: 600
	}
}