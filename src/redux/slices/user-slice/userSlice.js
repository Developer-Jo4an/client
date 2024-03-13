import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'

import { UserRequestService } from '../../../services/UserRequestService'
import { UserAsyncThunksHandler } from '../../../async-thunks-handlers/UserAsyncThunksHandler'

import { initialNewAccountState, newAccountActions, newAccountSelectors} from './sub-new-account-slice/subNewAccountSlice'
import { initialModifiedAccountState, modifiedAccountActions, modifiedAccountSelectors } from './sub-modified-account-slice/subModifiedAccountSlice'
import { initialDeleteAccountState, deleteAccountActions, deleteAccountSelectors } from "./sub-delete-account-slice/subDeleteAccountSlice"
import { initialNewTransactionState,  newTransactionActions,  newTransactionSelectors } from './sub-new-transaction-slice/subNewTransactionSlice'

const createAsyncSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })

const initialState = {
	user: {},
	isLoading: true,
	error: null,

	...initialNewAccountState,
	...initialModifiedAccountState,
	...initialDeleteAccountState,
	...initialNewTransactionState,
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
		userTransactionsSelector: sliceState => sliceState.user.transactions,
		userTransactionCategoriesSelector: sliceState => sliceState.user.transactionCategories,
		userTransactionCategoriesExpenseSelector: sliceState => sliceState.user.transactionCategories.expense,
		userTransactionCategoriesIncomeSelector: sliceState => sliceState.user.transactionCategories.income,

		...newAccountSelectors,
		...modifiedAccountSelectors,
		...deleteAccountSelectors,
		...newTransactionSelectors
	},
	reducers: create => ({
		// user
		getUserInfo: create.asyncThunk(
			UserRequestService.getUserInfo,
			UserAsyncThunksHandler.getUserInfo
		),

		// new account
		...newAccountActions(create),

		// modified account
		...modifiedAccountActions(create),

		// delete account
		...deleteAccountActions(create),

		// new transaction
		...newTransactionActions(create)
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
	userTransactionsSelector,
	userTransactionCategoriesSelector,
	userTransactionCategoriesExpenseSelector,
	userTransactionCategoriesIncomeSelector
} = userSlice.selectors

export const {
	getUserInfo
} = userSlice.actions