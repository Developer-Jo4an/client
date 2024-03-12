export const styles = {
	filterExpenseCategoryArrowWrapper: animation => ({
		transform: [{ rotate: animation.interpolate({
				inputRange: [0, 1],
				outputRange: ['0deg', '180deg']
			}) }]
	})
}