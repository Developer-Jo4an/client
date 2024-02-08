import { BETWEEN_LINE } from '../../../../constants/styleConstants'

export const styles = {
    filterPeriodContainer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

        backgroundColor: '#fff',

        overflow: 'hidden'
    },
    filterPreinstalledPeriod: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'flex-start',

        paddingLeft: 20,
        paddingRight: 20
    },
    filterCustomRange: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'flex-start',

        paddingLeft: 20,
        paddingRight: 20
    },
    filterPeriodPreinstalledWrapper: {
        gap: 6,
        alignItems: 'flex-start'
    },
    filterCustomPeriodWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,

    },
    filterPeriodPreinstalledLabel: {
        fontWeight: 600,

        fontSize: 18
    },
    filterCustomPeriodLabel: {
        fontWeight: 600,

        fontSize: 18
    },
    filterPeriodPreinstalledPeriod: {
        opacity: 0.7
    },
    filterPeriodBetweenLine: {
        width: '90%',
        height: 2,

        backgroundColor: BETWEEN_LINE,

        borderRadius: 1,

        alignSelf: 'center',

        marginTop: 10,
        marginBottom: 10
    },
}