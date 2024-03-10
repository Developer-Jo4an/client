import { GREEN_COLOR } from '../../../../../constants/styleConstants'

export const styles = {
    defaultRangeInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    defaultRangeInfo: {
        gap: 2,
    },
    defaultRangeName: status => ({
        fontWeight: 600,

        color: status ? GREEN_COLOR : '#000'
    }),
    defaultRangeValue: status => ({
        fontWeight: 600,

        color: status ? GREEN_COLOR : '#000'
    }),
    defaultRangeCheck: status => ({
        opacity: status ? 1 : 0
    })
}