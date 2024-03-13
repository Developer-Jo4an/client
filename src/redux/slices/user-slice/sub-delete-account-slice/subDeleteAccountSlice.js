import { AccountsRequestService } from "../../../../services/AccountsRequestService"
import { AccountsAsyncThunkHandler } from "../../../../async-thunks-handlers/AccountsAsyncThunkHandler"

export const initialDeleteAccountState = {
    deleteAccountIsLoading: false,
    deleteAccountError: null,
}

export const deleteAccountSelectors = {
    userDeleteAccountIsLoadingSelector: sliceState => sliceState.deleteAccountIsLoading,
    userDeleteAccountErrorSelector: sliceState => sliceState.deleteAccountError,
}

export const deleteAccountActions = create => ({
    deleteAccountAction: create.asyncThunk(
        AccountsRequestService.deleteAccount,
        AccountsAsyncThunkHandler.deleteAccount
    )
})