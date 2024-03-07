import { DARK_GOLD_COLOR, DARK_GREEN_COLOR, GOLD_COLOR, GREEN_COLOR } from '../../../../constants/styleConstants'

export const styles = {
	subLvlColor: subLvl => subLvl === 'Standard' ?
		[GREEN_COLOR, DARK_GREEN_COLOR]
		:
		[GOLD_COLOR, DARK_GOLD_COLOR],
	headerSubLvlValueWrapper: {
		paddingTop: 4,
		paddingLeft: 12,
		paddingRight: 12,
		paddingBottom: 4,
	},
	headerSubLvlValue: {
		color: '#fff',
		fontWeight: 600,
	}
}