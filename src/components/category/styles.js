export const styles = {
	category: callback => ({
		borderRadius: 12,

		overflow: 'hidden',

		backgroundColor: '#fff',

		pointerEvents: callback ? 'auto' : 'none'
	}),
	categoryWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,

		padding: 12,
	},
	categorySignWrapper: color => ({
		width: 34,
		height: 34,

		justifyContent: 'center',
		alignItems: 'center',

		backgroundColor: color,

		borderRadius: 12,
	})
}