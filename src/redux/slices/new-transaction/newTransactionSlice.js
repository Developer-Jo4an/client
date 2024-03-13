import {asyncThunkCreator, buildCreateSlice} from '@reduxjs/toolkit'

import moment from 'moment'

const createAsyncSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })

const initialState = {
	transaction: {
		transactionType: 'expense',
		transactionDate: new Date(),
		transactionAccount: '',
		transactionAmount: '',
		transactionTransferAccount: '',
		transactionDescription: '',
		transactionCategory: '',
		transactionSubCategory: ''
	}
}

export const newTransactionSlice = createAsyncSlice({
	name: 'newTransaction',
	initialState,
	selectors: {
		newTransactionTransactionSelector: sliceState => sliceState.transaction,
		newTransactionTypeSelector: sliceState => sliceState.transaction.transactionType,
		newTransactionDateSelector: sliceState => sliceState.transaction.transactionDate,
		newTransactionAccountSelector: sliceState => sliceState.transaction.transactionAccount,
		newTransactionAmountSelector: sliceState => sliceState.transaction.transactionAmount,
		newTransactionTransferAccountSelector: sliceState => sliceState.transaction.transactionTransferAccount,
		newTransactionDescriptionSelector: sliceState => sliceState.transaction.transactionDescription,
		newTransactionCategorySelector: sliceState => sliceState.transaction.transactionCategory,
		newTransactionSubCategorySelector: sliceState => sliceState.transaction.transactionSubCategory,
	},
	reducers: create => ({
		newTransactionAddTypeAction: create.reducer((state, action) => {
			state.transaction.transactionType = action.payload
			state.transaction.transactionTransferAccount = ''
			state.transaction.transactionCategory = ''
			state.transaction.transactionSubCategory = ''
		}),
		newTransactionAddDateAction: create.reducer((state, action) => {
			state.transaction.transactionDate = action.payload
		}),
		newTransactionDateToggleAction: create.reducer((state, action) => {
			state.transaction.transactionDate = moment(state.transaction.transactionDate)[action.payload](1, 'days')._d
		}),
		newTransactionAddAccountAction: create.reducer((state, action) => {
			if (action.payload === state.transaction.transactionTransferAccount) state.transaction.transactionTransferAccount = ''
			state.transaction.transactionAccount = action.payload
		}),
		newTransactionAddAmountAction: create.reducer((state, action) => {
			state.transaction.transactionAmount = action.payload
		}),
		newTransactionAddTransferAccountAction: create.reducer((state, action) => {
			if (action.payload === state.transaction.transactionAccount) return
			state.transaction.transactionTransferAccount = action.payload
		}),
		newTransactionAddDescriptionAction: create.reducer((state, action) => {
			state.transaction.transactionDescription = action.payload
		}),
		newTransactionAddCategoryAction: create.reducer((state, action) => {
			state.transaction.transactionCategory = action.payload
		}),
		newTransactionAddSubCategoryAction: create.reducer((state, action) => {
			state.transaction.transactionSubCategory = action.payload
		}),
	})
})

export const  {
	newTransactionTransactionSelector,
	newTransactionTypeSelector,
	newTransactionDateSelector,
	newTransactionAccountSelector,
	newTransactionAmountSelector,
	newTransactionTransferAccountSelector,
	newTransactionDescriptionSelector,
	newTransactionCategorySelector,
	newTransactionSubCategorySelector
} = newTransactionSlice.selectors

export const {
	newTransactionAddTypeAction,
	newTransactionAddDateAction,
	newTransactionDateToggleAction,
	newTransactionAddAccountAction,
	newTransactionAddAmountAction,
	newTransactionAddTransferAccountAction,
	newTransactionAddDescriptionAction,
	newTransactionAddCategoryAction,
	newTransactionAddSubCategoryAction
} = newTransactionSlice.actions
