import { AccountsRequestService } from "../../../../services/AccountsRequestService"
import { AccountsAsyncThunkHandler } from "../../../../async-thunks-handlers/AccountsAsyncThunkHandler"

export const initialModifiedAccountState = {
	modifiedAccountIsLoading: false,
	modifiedAccountError: null,
	modifiedAccountModal: false,
}

export const modifiedAccountSelectors = {
	userModifiedAccountIsLoadingSelector: sliceState => sliceState.modifiedAccountIsLoading,
	userModifiedAccountErrorSelector: sliceState => sliceState.modifiedAccountError,
	userModifiedAccountModalSelector: sliceState => sliceState.modifiedAccountModal,
}

export const modifiedAccountActions = create => ({
	modifiedAccountAction: create.asyncThunk(
		AccountsRequestService.modifiedAccount,
		AccountsAsyncThunkHandler.modifiedAccount
	),
	modifiedAccountModalAction: create.reducer(state => {
		state.modifiedAccountModal = !state.modifiedAccountModal
	})
})
