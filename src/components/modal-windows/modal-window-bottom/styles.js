import { MODAL_WINDOW_BACKGROUND } from '../../../constants/styleConstants'

export const styles = {
    modalWindowBottom: (isVisible, animation) => ({
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

        pointerEvents: isVisible ? 'auto' : 'none',

        overflow: 'hidden',

        opacity: animation,

        backgroundColor: MODAL_WINDOW_BACKGROUND
    }),
    modalWindowBottomCloseField: {
        flexGrow: 1,
    },
    modalWindowBottomContent: (animation, contentHeight) => ({
        transform: [{ translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [contentHeight, 0]
        }) }],

        opacity: animation
    })
}