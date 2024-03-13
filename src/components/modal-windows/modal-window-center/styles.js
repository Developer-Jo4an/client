import { MODAL_WINDOW_BACKGROUND } from '../../../constants/styleConstants'

export const styles = {
    modalWindowCenter: (isVisible, animation) => ({
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
    modalWindowCenterWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalWindowCenterContent: contentWidth => ({
        width: contentWidth ?? 'auto',
    })
}