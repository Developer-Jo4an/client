import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'

import { DARK_GREEN_COLOR, GREEN_COLOR } from '../../../constants/styleConstants'

const createAsyncSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })

const initialState = {
	account: {
		accountName: '',
		count: 0,
		accountType: 'cash',
		accountSignColor: [GREEN_COLOR, DARK_GREEN_COLOR],
	}
}

export const newAccountSlice = createAsyncSlice({
	name: 'newAccount',
	initialState,
	selectors: {
		newAccountAccountSelector: sliceState => sliceState.account,
		newAccountAccountTypeSelector: sliceState => sliceState.account.accountType,
		newAccountAccountSignColorSelector: sliceState => sliceState.account.accountSignColor
	},
	reducers: create => ({
		newAccountAddName: create.reducer((state, action) => { state.account.accountName = action.payload }),
		newAccountAddCount: create.reducer((state, action) => { state.account.count = action.payload }),
		newAccountAddType: create.reducer((state, action) => { state.account.accountType = action.payload }),
		newAccountAddColor: create.reducer((state, action) => { state.account.accountSignColor = action.payload }),
		newAccountZeroing: create.reducer(state => { state.account = initialState.account })
	})
})

export const {
	newAccountAddName,
	newAccountAddCount,
	newAccountAddType,
	newAccountAddColor,
	newAccountZeroing
} = newAccountSlice.actions
export const {
	newAccountAccountSelector,
	newAccountAccountTypeSelector,
	newAccountAccountSignColorSelector,
} = newAccountSlice.selectors