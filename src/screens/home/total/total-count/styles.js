import { GREEN_COLOR, ORANGE_COLOR, RED_COLOR } from '../../../../constants/styleConstants'

export const styles = {
	totalAmount: amount => ({
		fontSize: 28,

		color: amount === 0 ? ORANGE_COLOR : amount > 0 ? GREEN_COLOR : RED_COLOR
	}),
}