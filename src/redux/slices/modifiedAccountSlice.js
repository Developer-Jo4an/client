import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'
import { DARK_GREEN_COLOR, GREEN_COLOR } from '../../constants/styleConstants'

const createAsyncSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })

const initialState = {
	account: {
		_id: null,
		accountName: '',
		count: 0,
		accountType: 'cash',
		accountSignColor: [GREEN_COLOR, DARK_GREEN_COLOR],
	}
}

export const modifiedAccountSlice = createAsyncSlice({
	name: 'modifiedAccount',
	initialState,
	selectors: {
		modifiedAccountAccountSelector: sliceState => sliceState.account,
		modifiedAccountIdSelector: sliceState => sliceState.account._id,
		modifiedAccountNameSelector: sliceState => sliceState.account.accountName,
		modifiedAccountCountSelector: sliceState => sliceState.account.count,
		modifiedAccountTypeSelector: sliceState => sliceState.account.accountType,
		modifiedAccountColorSelector: sliceState => sliceState.account.accountSignColor,
	},
	reducers: create => ({
		modifiedAccountAddNameAction: create.reducer((state, action) => { state.account.accountName = action.payload }),
		modifiedAccountAddCountAction: create.reducer((state, action) => { state.account.count = action.payload }),
		modifiedAccountAddTypeAction: create.reducer((state, action) => { state.account.accountType = action.payload }),
		modifiedAccountAddColorAction: create.reducer((state, action) => { state.account.accountSignColor = action.payload }),
		modifiedAccountSetAccount: create.reducer((state, action) => { state.account = action.payload }),
		modifiedAccountZeroing: create.reducer(state => { state.account = initialState.account })
	})
})

export const {
	modifiedAccountAccountSelector,
	modifiedAccountIdSelector,
	modifiedAccountNameSelector,
	modifiedAccountCountSelector,
	modifiedAccountTypeSelector,
	modifiedAccountColorSelector
} = modifiedAccountSlice.selectors

export const {
	modifiedAccountAddNameAction,
	modifiedAccountAddCountAction,
	modifiedAccountAddTypeAction,
	modifiedAccountAddColorAction,
	modifiedAccountSetAccount,
	modifiedAccountZeroing
} = modifiedAccountSlice.actions
