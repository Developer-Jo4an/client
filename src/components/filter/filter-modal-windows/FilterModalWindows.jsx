import React from 'react'

import FilterPeriod from './filter-period/FilterPeriod'
import ModalWindowBottom from '../../modal-windows/modal-window-bottom/ModalWindowBottom'
import ModalWindowCenter from '../../modal-windows/modal-window-center/ModalWindowCenter'
import FilterCalendar from './filter-calendar/FilterCalendar'

import { useFilterContext } from '../filter-provider/FilterProvider'

import { SCREEN_WIDTH } from '../../../constants/variableConstants'

const FilterModalWindows = () => {

    const {
        filterPeriodVisible,
        filterPeriod,
        filterCalendarVisible,
        filterCalendarPeriod
    } = useFilterContext()

    return (
        <>
            <ModalWindowBottom
                visible={ filterPeriodVisible }
                contentHeight={ 442 }
                hostName={ 'application-host'
            }><FilterPeriod
                periodVisible={ filterPeriodVisible }
                period={ filterPeriod }
                calendarVisible={ filterCalendarVisible }
              />
            </ModalWindowBottom>

            <ModalWindowCenter
                visible={ filterCalendarVisible }
                contentWidth={ SCREEN_WIDTH - 40 }
            ><FilterCalendar
                filterPeriod={ filterPeriod }
                calendarPeriod={ filterCalendarPeriod }
             />
            </ModalWindowCenter>

        </>
    )
}

export default FilterModalWindows