import { SCREEN_WIDTH } from '../../../../../../constants/variableConstants'

export const styles = {
    newAccountPreviewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,

        paddingLeft: 20,
        paddingRight: 20,
    },
    newAccountShadow: {
        width: SCREEN_WIDTH - 130,

        borderRadius: 10,
    }
}