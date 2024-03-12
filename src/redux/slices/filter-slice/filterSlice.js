import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'

import moment from 'moment'

import {
    allTimeAgo,
    dateEndOf,
    dateStartOf,
    halfYearAgo,
    monthAgo,
    weekAgo,
    yearAgo
} from '../../../constants/functionConstants'

// range constants
export const TODAY_RANGE = 'today'
export const WEEK_RANGE = 'week'
export const MONTH_RANGE = 'month'
export const HALF_YEAR_RANGE = 'halfYear'
export const YEAR_RANGE = 'year'
export const ALL_TIME_RANGE = 'allTime'

export const TODAY_LABEL = 'Today'
export const WEEK_LABEL = 'Week'
export const MONTH_LABEL = 'Month'
export const HALF_YEAR_LABEL = 'Half year'
export const YEAR_LABEL = 'Year'
export const ALL_TIME_LABEL = 'All time'

export const ALL_TIME_SIGN = '∞'

// types constants
export const EXPENSE_TYPE = 'expense'
export const INCOME_TYPE = 'income'
export const TRANSFER_TYPE = 'transfer'

export const EXPENSE_LABEL = 'Expense'
export const INCOME_LABEL = 'Income'
export const TRANSFER_LABEL = 'Transfer'

const createAsyncSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })

const initialState = {
    isRangeMWVisible: false,
    isOptionsMWVisible: false,
    timeRangeDefault: {
        [TODAY_RANGE] : { status: false, label: TODAY_LABEL, range: [dateStartOf(new Date()), dateEndOf(new Date())] },
        [WEEK_RANGE] : { status: true, label: WEEK_LABEL, range: [weekAgo(new Date()), dateEndOf(new Date())] },
        [MONTH_RANGE] : { status: false, label: MONTH_LABEL, range: [monthAgo(new Date()), dateEndOf(new Date())] },
        [HALF_YEAR_RANGE] : { status: false, label: HALF_YEAR_LABEL, range: [halfYearAgo(new Date()), dateEndOf(new Date())] },
        [YEAR_RANGE] : { status: false, label: YEAR_LABEL, range: [yearAgo(new Date()), dateEndOf(new Date())] },
        [ALL_TIME_RANGE] : { status: false, label: ALL_TIME_LABEL, range: [allTimeAgo(new Date()), dateEndOf(new Date())] }
    },
    customRange: [],
    accounts: [],
    categoriesType: [],
    expenseCategories: [],
	subExpenseCategories: [],
    incomeCategories: [],
	subIncomeCategories: [],
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
        filterExpenseSubCategoriesSelector: sliceState => sliceState.subExpenseCategories,
        filterIncomeCategoriesSelector: sliceState => sliceState.incomeCategories,
	    filterIncomeSubCategoriesSelector: sliceState => sliceState.subIncomeCategories,
        filterIsRangeMWVisibleSelector: sliceState => sliceState.isRangeMWVisible,
        filterIsOptionsMWVisibleSelector: sliceState => sliceState.isOptionsMWVisible,
    },
    reducers: create =>({
	    // range
        setTodayRangeAction: create.reducer(state => {
            if (state.customRange.length) state.customRange = []
            state.timeRangeDefault = changeDefaultsRange(state.timeRangeDefault, TODAY_RANGE)
        }),
        setWeekRangeAction: create.reducer(state => {
            if (state.customRange.length) state.customRange = []
            state.timeRangeDefault = changeDefaultsRange(state.timeRangeDefault, WEEK_RANGE)
        }),
        setMonthRangeAction: create.reducer(state => {
            if (state.customRange.length) state.customRange = []
            state.timeRangeDefault = changeDefaultsRange(state.timeRangeDefault, MONTH_RANGE)
        }),
        setHalfYearRangeAction: create.reducer(state => {
            if (state.customRange.length) state.customRange = []
            state.timeRangeDefault = changeDefaultsRange(state.timeRangeDefault, HALF_YEAR_RANGE)
        }),
        setYearRangeAction: create.reducer(state => {
            if (state.customRange.length) state.customRange = []
            state.timeRangeDefault = changeDefaultsRange(state.timeRangeDefault, YEAR_RANGE)
        }),
        setAllTimeRangeAction: create.reducer(state => {
            if (state.customRange.length) state.customRange = []
            state.timeRangeDefault = changeDefaultsRange(state.timeRangeDefault, ALL_TIME_RANGE)
        }),
	    toggleTimeRangeAction: create.reducer((state, action) => {
			let difference = null
		    let startDate = null
		    let endDate = null

		    if (state.customRange.length) {
				[startDate, endDate] = [moment(state.customRange[0]), moment(state.customRange[1])]
		    } else {
				const [rangeName, rangeObject] = Object.entries(state.timeRangeDefault).find(([_, { status }]) => !!status)

			    if (rangeName === ALL_TIME_RANGE) return

				[startDate, endDate] = [moment(rangeObject.range[0]), moment(rangeObject.range[1])]
		    }

		    difference = endDate.diff(startDate, 'days') + 1

			state.timeRangeDefault =
				Object.entries(state.timeRangeDefault)
				    .reduce((acc, [rangeName, rangeObject]) =>
						({ ...acc, [rangeName] : { ...rangeObject, status : false } }), {})

			state.customRange = [startDate[action.payload](difference, 'days'), endDate[action.payload](difference, 'days')]
	    }),
	    // account
        toggleAccountAction: create.reducer((state, action) => {
            const isAccountExist = state.accounts.includes(action.payload)

	        if (isAccountExist) state.accounts = state.accounts.filter(accountId => accountId !== action.payload)
            else state.accounts.push(action.payload)
        }),
	    // type
        toggleCategoriesTypeAction: create.reducer((state, action) => {
            const isTypeExist = state.categoriesType.includes(action.payload)

            if (isTypeExist) state.categoriesType = state.categoriesType.filter(type => type !== action.payload)
            else state.categoriesType.push(action.payload)
        }),
		// expense categories
        toggleExpenseCategoryAction: create.reducer((state, action) => {
			const { category, subCategories } = action.payload
            const isCategoryExist = state.expenseCategories.includes(category)

            if (isCategoryExist) {
				state.expenseCategories = state.expenseCategories.filter(categoryId => categoryId !== category)
	            state.subExpenseCategories = state.subExpenseCategories.filter(subCategoryId => !subCategories.includes(subCategoryId))
            }
            else {
				state.expenseCategories.push(category)
	            state.subExpenseCategories = [...state.subExpenseCategories, ...subCategories]
            }
        }),
	    toggleExpenseSubCategoryAction: create.reducer((state, action) => {
			const { subCategory, parentCategory } = action.payload
		    const isSubCategoryExist = state.subExpenseCategories.includes(subCategory)

		    if (isSubCategoryExist) {
			    state.subExpenseCategories = state.subExpenseCategories.filter(subCategoryId => subCategoryId !== subCategory)
		    } else {
			    state.subExpenseCategories.push(subCategory)

			    const isParentCategoryExist = state.expenseCategories.includes(parentCategory)
		        if (!isParentCategoryExist) state.expenseCategories.push(parentCategory)
		    }
	    }),
	    noSubCategoriesExpenseAction: create.reducer((state, action) => {
			const { category, subCategories } = action.payload
			const isCategoryExist = state.expenseCategories.includes(category)

		    if (!isCategoryExist) state.expenseCategories.push(category)

		    state.subExpenseCategories = state.subExpenseCategories.filter(subCategoryId => !subCategories.includes(subCategoryId))
	    }),
	    // income categories
        toggleIncomeCategoryAction: create.reducer((state, action) => {
	        const { category, subCategories } = action.payload
	        const isCategoryExist = state.incomeCategories.includes(category)

	        if (isCategoryExist) {
		        state.incomeCategories = state.incomeCategories.filter(categoryId => categoryId !== category)
		        state.subIncomeCategories = state.subIncomeCategories.filter(subCategoryId => !subCategories.includes(subCategoryId))
	        }
	        else {
		        state.incomeCategories.push(category)
		        state.subIncomeCategories = [...state.subIncomeCategories, ...subCategories]
	        }
        }),
	    toggleIncomeSubCategoryAction: create.reducer((state, action) => {
		    const { subCategory, parentCategory } = action.payload
		    const isSubCategoryExist = state.subIncomeCategories.includes(subCategory)

		    if (isSubCategoryExist) {
			    state.subIncomeCategories = state.subIncomeCategories.filter(subCategoryId => subCategoryId !== subCategory)
		    } else {
			    state.subIncomeCategories.push(subCategory)

			    const isParentCategoryExist = state.incomeCategories.includes(parentCategory)
			    if (!isParentCategoryExist) state.incomeCategories.push(parentCategory)
		    }
	    }),
	    noSubCategoriesIncomeAction: create.reducer((state, action) => {
		    const { category, subCategories } = action.payload
		    const isCategoryExist = state.incomeCategories.includes(category)

		    if (!isCategoryExist) state.incomeCategories.push(category)

		    state.subIncomeCategories = state.subIncomeCategories.filter(subCategoryId => !subCategories.includes(subCategoryId))
	    }),
		// modal windows
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
	filterExpenseSubCategoriesSelector,
    filterIncomeCategoriesSelector,
	filterIncomeSubCategoriesSelector,
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
	toggleTimeRangeAction,
    toggleAccountAction,
    toggleCategoriesTypeAction,
	toggleExpenseCategoryAction,
	toggleExpenseSubCategoryAction,
	noSubCategoriesExpenseAction,
	toggleIncomeCategoryAction,
	toggleIncomeSubCategoryAction,
	noSubCategoriesIncomeAction,
    toggleIsRangeMWVisibleAction,
    toggleIsOptionsMWVisibleAction
} = filterSlice.actions