import React, { useContext, useReducer, useState } from 'react'

import moment from 'moment'
import {
    dateEndOf,
    dateStartOf,
    monthPeriod,
    weekPeriod,
    yearPeriod
} from '../../../constants/functionConstants'

const FilterContext = React.createContext()
export const useFilterContext = () => useContext(FilterContext)


const defaultFilterPeriod = [
    weekPeriod(new Date()),
    dateEndOf(new Date())
]
const filterPeriodReducer = (state, action) => {
    switch (action.type) {
        case 'set-date' : return [dateStartOf(action.date), dateEndOf(action.date)]
        case 'set-period' : return [dateStartOf(action.dates[0]), dateEndOf(action.dates[1])]
        case 'set-today' : return [dateStartOf(new Date()), dateEndOf(new Date())]
        case 'set-week' : return [weekPeriod(new Date()), dateStartOf(new Date())]
        case 'set-month' : return [monthPeriod(new Date()), dateStartOf(new Date())]
        case 'set-year' : return [yearPeriod(new Date()), dateStartOf(new Date())]
        case 'set-all-time' : return [moment('1970-01-01'), dateEndOf(new Date())]
        default : return state
    }
}

const defaultFilterCalendarPeriod = {}
const filterCalendarPeriodReducer = (state, action) => {
    switch (action.type) {
        case 'set-start-date' : return action.startDate
        case 'set-rest-dates' : return action.restDates
        case 'reset' : return defaultFilterCalendarPeriod
        default : return state
    }
}

const defaultFilterSort = {
    types: [],
    accounts: [],
    expenseCategories: [],
    incomeCategories: []
}
const filterSortReducer = (state, action) => {
    switch (action.type) {
        case 'set-type' : {
            const { types } = state
            const { type } = action

            return types.includes(type) ? { ...state, types: types.filter(prevType => prevType !== type) } : { ...state, types: [...types, type] }
        }
        case 'set-account' : {
            const { accounts } = state
            const { account } = action

            return accounts.includes(account) ? { ...state, accounts: accounts.filter(prevAccount => prevAccount !== account) } : { ...state, accounts: [...accounts, account] }
        }
        case 'set-expense-categories' : {
            const { expenseCategories } = state
            const { category } = action

            return expenseCategories.includes(category) ? { ...state, expenseCategories: expenseCategories.filter(prevCategory => prevCategory !== category) } : { ...state, expenseCategories: [...expenseCategories, category] }

        }
        case 'set-income-categories' : {
            const { incomeCategories } = state
            const { category } = action

            return incomeCategories.includes(category) ? { ...state, incomeCategories: incomeCategories.filter(prevCategory => prevCategory !== category) } : { ...state, incomeCategories: [...incomeCategories, category] }
        }
        default : return state
    }
}


const FilterProvider = ({ children }) => {

    const filterPeriod = useReducer(filterPeriodReducer, defaultFilterPeriod)
    const filterPeriodVisible = useState(false)

    const filterCalendarPeriod = useReducer(filterCalendarPeriodReducer, defaultFilterCalendarPeriod)
    const filterCalendarVisible = useState(false)

    const filterSort = useReducer(filterSortReducer, defaultFilterSort)
    const filterSortVisible = useState(false)

    return (
        <FilterContext.Provider value={{
            filterPeriod,
            filterPeriodVisible,
            filterCalendarVisible,
            filterCalendarPeriod,
            filterSort,
            filterSortVisible
        }}>{ children }</FilterContext.Provider>
    )
}

export default FilterProvider