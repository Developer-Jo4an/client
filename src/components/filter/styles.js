import { SCREEN_WIDTH } from '../../constants/variableConstants'
import { StatusBar } from 'react-native'

export const styles = {
    filterContainer: {
        width: SCREEN_WIDTH,
        paddingTop: StatusBar.currentHeight + 10,
        paddingLeft: 10,
        paddingRight: 10,
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
    filterSortWrapper: {
        padding: 10
    },
    filterSelectSort: {
        borderRadius: 20,

        overflow: 'hidden'
    }
}