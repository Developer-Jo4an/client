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
		modifiedAccountNameSelector: sliceState => sliceState.accountName.accountName,
		modifiedAccountCountSelector: sliceState => sliceState.accountName.count,
		modifiedAccountTypeSelector: sliceState => sliceState.accountName.accountType,
		modifiedAccountColorSelector: sliceState => sliceState.accountName.accountSignColor,
	},
	reducers: create => ({
		modifiedAccountAddNameAction: create.reducer((state, action) => { state.account.accountName = action.payload }),
		modifiedAccountAddCountAction: create.reducer((state, action) => { state.account.count = action.payload }),
		modifiedAccountAddTypeAction: create.reducer((state, action) => { state.account.accountType = action.payload }),
		modifiedAccountAddColorAction: create.reducer((state, action) => { state.account.accountSignColor = action.payload }),
		modifiedAccountSetAccount: create.reducer((state, action) => { state.account = action.payload })
	})
})

export const {
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
} = modifiedAccountSlice.actions
