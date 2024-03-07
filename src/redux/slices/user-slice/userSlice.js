import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'

import { UserRequestService } from '../../../services/UserRequestService'
import { UserAsyncThunksHandler } from '../../../async-thunks-handler/UserAsyncThunksHandler'
import { AccountsRequestService } from '../../../services/AccountsRequestService'
import { AccountsAsyncThunkHandler } from '../../../async-thunks-handler/AccountsAsyncThunkHandler'
import { initialNewAccountState, newAccountSelectors } from './subNewAccountSlice'
import { initialModifiedAccountState, modifiedAccountSelectors } from './subModifiedAccountSlice'

const createAsyncSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })


const initialState = {
	user: {},
	isLoading: true,
	error: null,

	...initialNewAccountState,
	...initialModifiedAccountState,
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
	},
	reducers: create => ({
		getUserInfo: create.asyncThunk(
			UserRequestService.getUserInfo,
			UserAsyncThunksHandler.getUserInfo
		),

		addNewAccount: create.asyncThunk(
			AccountsRequestService.addAccount,
			AccountsAsyncThunkHandler.addNewAccount
		),
		addNewAccountModal: create.reducer(state => {
			state.addNewAccountModal = !state.addNewAccountModal
		}),

		modifiedAccountModalAction: create.reducer(state => {
			state.modifiedAccountModal = !state.modifiedAccountModal
		})
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

	userNewAccountIsLoadingSelector,
	userAddNewAccountError,
	userAddNewAccountModalSelector,

	userModifiedAccountIsLoadingSelector,
	userModifiedAccountErrorSelector,
	userModifiedAccountModalSelector,
} = userSlice.selectors

export const {
	getUserInfo,

	addNewAccount,
	addNewAccountModal,

	modifiedAccountModalAction,
} = userSlice.actions