import { GREEN_COLOR } from '../../../constants/styleConstants'

export const styles = {
    fixedAddBtnContainer: position => ({
        position: 'absolute',
        top: position.top,
        left: position.left,
    }),
    fixedAddBtnPulse: animation => ({
        width: 60,
        height: 60,

        position: 'absolute',
        top: 0,
        left: 0,

        borderRadius: 20,

        opacity: animation.interpolate({ inputRange: [0, 0.5, 1], outputRange: [1, 0, 0] }),

        transform: [{ scale: animation.interpolate({ inputRange: [0, 0.5, 1], outputRange: [1, 1.2, 1] }) }],

        zIndex: 1,

        backgroundColor: GREEN_COLOR,
    }),
    fixedAddBtnWrapper: {
        borderRadius: 20,

        overflow: 'hidden',

        zIndex: 2,

	    backgroundColor: GREEN_COLOR
    },
    fixedAddBtnSign: {
        width: 60,
        height: 60,

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
}