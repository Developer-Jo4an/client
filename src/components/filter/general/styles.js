import { StatusBar } from 'react-native'
import {SCREEN_WIDTH} from "../../../constants/variableConstants";

export const styles = {
    filterContainer: {
		width: SCREEN_WIDTH,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        paddingTop: StatusBar.currentHeight + 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,

        backgroundColor: '#fff',

        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    filterRangeWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    filterRangeInfo: {
        borderRadius: 10,

        overflow: 'hidden'
    },
    filterRange: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,

        padding: 10,
    },
    filterBtnWrapper: {
        borderRadius: 99,

        overflow: 'hidden'
    },
    filterOptionsBtn: {
        padding: 10,
    }
}