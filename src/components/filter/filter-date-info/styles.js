import { SCREEN_WIDTH } from '../../../constants/variableConstants'

export const styles = {
    filterPeriodContainer: {
        width: SCREEN_WIDTH - 92,

        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    filterPeriodWrapper: {
        overflow: 'hidden',

        borderRadius: 20
    },
    filterPeriodInfo: {
        flexShrink: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,

        overflow: 'hidden',

        padding: 10,
    },
    filterPeriodArrowsContainer: {
        flexShrink: 0,

        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    filterPeriodArrowWrapper: {
        overflow: 'hidden',

        borderRadius: 20,
    },
    filterPeriodArrowSign: {
        padding: 10
    },
    filterDateInfo: {
        fontWeight: 600,
        overflow: 'hidden',
    }
}