import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { userSlice } from './slices/user-slice/userSlice'
import { newAccountSlice } from './slices/newAccountSlice'
import { modifiedAccountSlice } from './slices/modifiedAccountSlice'

const rootReducer = combineReducers({
	[userSlice.name]: userSlice.reducer,
	[newAccountSlice.name]: newAccountSlice.reducer,
	[modifiedAccountSlice.name]: modifiedAccountSlice.reducer
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware({
		serializableCheck: false,
	}),
})