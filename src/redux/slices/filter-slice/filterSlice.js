import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'

import {
    allTimeAgo,
    dateEndOf,
    dateStartOf,
    halfYearAgo,
    monthAgo,
    weekAgo,
    yearAgo
} from '../../../constants/functionConstants'

const createAsyncSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })

const initialState = {
    isRangeMWVisible: false,
    isOptionsMWVisible: false,
    timeRangeDefault: {
        today: { status: false, label: 'Today', range: [dateStartOf(new Date()), dateEndOf(new Date())] },
        week: { status: true, label: 'Week', range: [weekAgo(new Date()), dateEndOf(new Date())] },
        month: { status: false, label: 'Month', range: [monthAgo(new Date()), dateEndOf(new Date())] },
        halfYear: { status: false, label: 'Half year', range: [halfYearAgo(new Date()), dateEndOf(new Date())] },
        year: { status: false, label: 'Year', range: [yearAgo(new Date()), dateEndOf(new Date())] },
        allTime: { status: false, label: 'All time', range: [allTimeAgo(new Date()), dateEndOf(new Date())] }
    },
    customRange: [],
    accounts: [],
    categoriesType: [],
    expenseCategories: [],
    incomeCategories: []
}

const changeDefaultsRange = (rangeArr, range) =>
    Object.entries(rangeArr).reduce((acc, [rangeName, rangeObj]) => {
        return rangeName === range ?
            { ...acc, [rangeName] : { ...rangeObj, status: true }}
            :
            { ...acc, [rangeName] : { ...rangeObj, status: false }}
    }, {})



export const filterSlice = createAsyncSlice({
    name: 'filter',
    initialState,
    selectors: {
        filterTimeRangeDefaultSelector: sliceState => sliceState.timeRangeDefault,
        filterTimeRangeCustomSelector: sliceState => sliceState.customRange,
        filterAccountsSelector: sliceState => sliceState.accounts,
        filterCategoriesTypeSelector: sliceState => sliceState.categoriesType,
        filterExpenseCategoriesSelector: sliceState => sliceState.expenseCategories,
        filterIncomeCategoriesSelector: sliceState => sliceState.incomeCategories,
        filterIsRangeMWVisibleSelector: sliceState => sliceState.isRangeMWVisible,
        filterIsOptionsMWVisibleSelector: sliceState => sliceState.isOptionsMWVisible,
    },
    reducers: create =>({
        setTodayRangeAction: create.reducer(state => {
            if (state.customRange.length) state.customRange = []
            state.timeRangeDefault = changeDefaultsRange(state.timeRangeDefault, 'today')
        }),
        setWeekRangeAction: create.reducer(state => {
            if (state.customRange.length) state.customRange = []
            state.timeRangeDefault = changeDefaultsRange(state.timeRangeDefault, 'week')
        }),
        setMonthRangeAction: create.reducer(state => {
            if (state.customRange.length) state.customRange = []
            state.timeRangeDefault = changeDefaultsRange(state.timeRangeDefault, 'month')
        }),
        setHalfYearRangeAction: create.reducer(state => {
            if (state.customRange.length) state.customRange = []
            state.timeRangeDefault = changeDefaultsRange(state.timeRangeDefault, 'halfYear')
        }),
        setYearRangeAction: create.reducer(state => {
            if (state.customRange.length) state.customRange = []
            state.timeRangeDefault = changeDefaultsRange(state.timeRangeDefault, 'year')
        }),
        setAllTimeRangeAction: create.reducer(state => {
            if (state.customRange.length) state.customRange = []
            state.timeRangeDefault = changeDefaultsRange(state.timeRangeDefault, 'allTime')
        }),

        toggleAccountAction: create.reducer((state, action) => {
            const isAccountExist = !!state.accounts.find(({ _id }) => _id === action.payload)

            if (isAccountExist) state.accounts = state.accounts.filter(({ _id }) => _id !== action.payload)
            else state.accounts.push(action.payload)
        }),

        toggleCategoriesTypeAction: create.reducer((state, action) => {
            const isTypeExist = !!state.categoriesType.find(type => type === action.payload)

            if (isTypeExist) state.categoriesType = state.categoriesType.filter(type => type !== action.payload)
            else state.categoriesType.push(action.payload)
        }),

        expenseCategoriesAction: create.reducer((state, action) => {
            const isCategoryExist = !!state.expenseCategories.find(({ _id }) => _id === action.payload)

            if (isCategoryExist) state.expenseCategories(({ _id }) => _id !== action.payload)
            else state.expenseCategories.push(action.payload)
        }),

        incomeCategoriesAction: create.reducer((state, action) => {
            const isCategoryExist = !!state.incomeCategories.find(({ _id }) => _id === action.payload)

            if (isCategoryExist) state.incomeCategories(({ _id }) => _id !== action.payload)
            else state.incomeCategories.push(action.payload)
        }),

        toggleIsRangeMWVisibleAction: create.reducer(state => {
            state.isRangeMWVisible = !state.isRangeMWVisible
        }),
        toggleIsOptionsMWVisibleAction: create.reducer(state => {
            state.isOptionsMWVisible = !state.isOptionsMWVisible
        }),
    })
})

export const {
    filterTimeRangeDefaultSelector,
    filterTimeRangeCustomSelector,
    filterAccountsSelector,
    filterCategoriesTypeSelector,
    filterExpenseCategoriesSelector,
    filterIncomeCategoriesSelector,
    filterIsRangeMWVisibleSelector,
    filterIsOptionsMWVisibleSelector
} = filterSlice.selectors

export const {
    setTodayRangeAction,
    setWeekRangeAction,
    setMonthRangeAction,
    setHalfYearRangeAction,
    setYearRangeAction,
    setAllTimeRangeAction,
    toggleAccountAction,
    toggleCategoriesTypeAction,
    expenseCategoriesAction,
    incomeCategoriesAction,
    toggleIsRangeMWVisibleAction,
    toggleIsOptionMWVisibleAction
} = filterSlice.actions