export const styles = {
	arrowBtn: {
		borderRadius: 99,

		overflow: 'hidden'
	},
	arrowBtnDirection: direction => ({
		padding: 10,

		transform: [{ rotate: direction === 'right' ? '180deg' : '0deg' }]
	})
}