import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    filterIsOptionsMWVisibleSelector,
    filterIsRangeMWVisibleSelector,
    toggleIsOptionMWVisibleAction,
    toggleIsRangeMWVisibleAction
} from '../../../../redux/slices/filter-slice/filterSlice'

import RangeModalWindow from '../range-modal-window/RangeModalWindow'
import ModalWindowBottom from '../../../modal-windows/modal-window-bottom/ModalWindowBottom'

const MemoizedRangeModalWindow = memo(ModalWindowBottom)
const MemoizedOptionsModalWindow = memo(ModalWindowBottom)
const FilterModalWindowsWrapper = () => {
    const dispatch = useDispatch()

    const isVisibleRangeModalWindow = useSelector(filterIsRangeMWVisibleSelector)
    const isVisibleOptionsModalWindow = useSelector(filterIsOptionsMWVisibleSelector)

    const closeRangeModalWindow = useCallback(() => dispatch(toggleIsRangeMWVisibleAction()), [])
    const closeOptionsModalWindow = useCallback(() => dispatch(toggleIsOptionMWVisibleAction()), [])

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
                contentHeight={ 500 }
                hostName={ 'application-host' }
                closeCallback={ closeOptionsModalWindow }
            >{/* Options Modal Window */}</MemoizedOptionsModalWindow>
        </>
    )
}

export default FilterModalWindowsWrapper