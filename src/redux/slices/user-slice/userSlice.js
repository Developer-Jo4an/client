import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'

import { UserRequestService } from '../../../services/UserRequestService'
import { UserAsyncThunksHandler } from '../../../async-thunks-handler/UserAsyncThunksHandler'

import { initialNewAccountState, newAccountActions, newAccountSelectors} from './sub-new-account-slice/subNewAccountSlice'
import { initialModifiedAccountState, modifiedAccountActions, modifiedAccountSelectors } from './sub-modified-account-slice/subModifiedAccountSlice'
import { deleteAccountActions, deleteAccountSelectors, initialDeleteAccountState } from "./sub-delete-account-slice/subDeleteAccountSlice"

const createAsyncSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })

const initialState = {
	user: {},
	isLoading: true,
	error: null,

	...initialNewAccountState,
	...initialModifiedAccountState,
	...initialDeleteAccountState,
}

export const userSlice = createAsyncSlice({
	name: 'user',
	initialState,
	selectors: {
		userStateSelector: sliceState => sliceState,

		userIsLoadingSelector: sliceState => sliceState.isLoading,
		userErrorSelector: sliceState => sliceState.error,
		userSelector: sliceState => sliceState.user,

		userAccountsSelector: sliceState => sliceState.user.accounts,
		userAvatarSelector: sliceState => sliceState.user.avatar,
		userNicknameSelector: sliceState => sliceState.user.nickname,
		userSubscriptionLevelSelector: sliceState => sliceState.user.subscriptionLevel,

		...newAccountSelectors,
		...modifiedAccountSelectors,
		...deleteAccountSelectors,
	},
	reducers: create => ({
		// user
		getUserInfo: create.asyncThunk(
			UserRequestService.getUserInfo,
			UserAsyncThunksHandler.getUserInfo
		),

		// add new account
		...newAccountActions(create),

		// modified account
		...modifiedAccountActions(create),

		// delete account
		...deleteAccountActions(create)
	})
})

export const {
	userStateSelector,
	userSelector,
	userIsLoadingSelector,
	userErrorSelector,

	userAccountsSelector,
	userAvatarSelector,
	userNicknameSelector,
	userSubscriptionLevelSelector,
} = userSlice.selectors

export const {
	getUserInfo
} = userSlice.actions