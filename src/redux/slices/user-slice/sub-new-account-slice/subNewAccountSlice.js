import { AccountsRequestService } from "../../../../services/AccountsRequestService"
import { AccountsAsyncThunkHandler } from "../../../../async-thunks-handlers/AccountsAsyncThunkHandler"

export const initialNewAccountState = {
	addNewAccountIsLoading: false,
	addNewAccountError: null,
	addNewAccountModal: false,
}

export const newAccountSelectors = {
	userNewAccountIsLoadingSelector: sliceState => sliceState.addNewAccountIsLoading,
	userAddNewAccountErrorSelector: sliceState => sliceState.addNewAccountError,
	userAddNewAccountModalSelector: sliceState => sliceState.addNewAccountModal,
}

export const newAccountActions = create => ({
	addNewAccount: create.asyncThunk(
		AccountsRequestService.addAccount,
		AccountsAsyncThunkHandler.addNewAccount
	),
	addNewAccountModal: create.reducer(state => {
		state.addNewAccountModal = !state.addNewAccountModal
	})
})