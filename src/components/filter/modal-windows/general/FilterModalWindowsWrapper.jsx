import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	filterIsOptionsMWVisibleSelector,
	filterIsRangeMWVisibleSelector,
	toggleIsOptionsMWVisibleAction,
	toggleIsRangeMWVisibleAction
} from '../../../../redux/slices/filter-slice/filterSlice'

import RangeModalWindow from '../range-modal-window/RangeModalWindow'
import ModalWindowBottom from '../../../modal-windows/modal-window-bottom/ModalWindowBottom'
import OptionsModalWindow from '../options-modal-window/OptionsModalWindow'

const MemoizedRangeModalWindow = memo(ModalWindowBottom)
const MemoizedOptionsModalWindow = memo(ModalWindowBottom)

import { SCREEN_HEIGHT } from '../../../../constants/variableConstants'

const FilterModalWindowsWrapper = () => {
    const dispatch = useDispatch()

    const isVisibleRangeModalWindow = useSelector(filterIsRangeMWVisibleSelector)
    const isVisibleOptionsModalWindow = useSelector(filterIsOptionsMWVisibleSelector)

    const closeRangeModalWindow = useCallback(() => dispatch(toggleIsRangeMWVisibleAction()), [])
    const closeOptionsModalWindow = useCallback(() => dispatch(toggleIsOptionsMWVisibleAction()), [])

    return (
        <>
            <MemoizedRangeModalWindow
                visible={ isVisibleRangeModalWindow }
                contentHeight={ 300 }
                hostName={ 'application-host' }
                closeCallback={ closeRangeModalWindow }
            ><RangeModalWindow />
            </MemoizedRangeModalWindow>

            <MemoizedOptionsModalWindow
                visible={ isVisibleOptionsModalWindow }
                contentHeight={ SCREEN_HEIGHT * 0.9 }
                hostName={ 'application-host' }
                closeCallback={ closeOptionsModalWindow }
            ><OptionsModalWindow />
			</MemoizedOptionsModalWindow>
        </>
    )
}

export default FilterModalWindowsWrapper