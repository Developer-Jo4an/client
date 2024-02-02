import { SCREEN_WIDTH } from '../../constants/variableConstants'
import { StatusBar } from 'react-native'

export const styles = {
    filterContainer: {
        width: SCREEN_WIDTH,
        paddingTop: StatusBar.currentHeight + 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        backgroundColor: '#fff',

        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    filterWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10
    },
    filterSelectDate: {
        borderRadius: 20,

        overflow: 'hidden'
    },
    filterDateWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,

        padding: 10,
    },
    filterDateInfo: {
        fontWeight: 600,
    },
    filterSortWrapper: {
        padding: 10
    },
    filterSelectSort: {
        borderRadius: 20,

        overflow: 'hidden'
    }
}