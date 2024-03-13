import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { userSlice } from './slices/user-slice/userSlice'
import { newAccountSlice } from './slices/new-account-slice/newAccountSlice'
import { modifiedAccountSlice } from './slices/modified-account-slice/modifiedAccountSlice'
import { filterSlice } from './slices/filter-slice/filterSlice'
import { newTransactionSlice } from './slices/new-transaction/newTransactionSlice'

const rootReducer = combineReducers({
	[userSlice.name]: userSlice.reducer,
	[newAccountSlice.name]: newAccountSlice.reducer,
	[modifiedAccountSlice.name]: modifiedAccountSlice.reducer,
	[newTransactionSlice.name]: newTransactionSlice.reducer,
	[filterSlice.name]: filterSlice.reducer
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})