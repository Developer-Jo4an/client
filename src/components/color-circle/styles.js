export const styles = {
    colorCircleContainer: animation => ({
        width: 45,
        height: 45,

        boxSizing: 'border-box',
        borderRadius: 50,
        overflow: 'hidden',

        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 2]
        }),

        padding: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 2]
        })
    }),
    colorCircleWrapper: {
        width: '100%',
        height: '100%',
    },
    newAccountColorGradientContainer: {
        borderRadius: 50,

        overflow: 'hidden'
    }
}