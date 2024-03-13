import { TransactionRequestService } from '../../../../services/TransactionRequestService'
import { TransactionAsyncThunkHandler } from '../../../../async-thunks-handlers/TransactionAsyncThunkHandler'

export const initialNewTransactionState = {
	addNewTransactionIsLoading: false,
	addNewTransactionError: null,
	addNewTransactionModal: false,
}

export const newTransactionSelectors = {
	userNewTransactionIsLoadingSelector: sliceState => sliceState.addNewTransactionIsLoading,
	userAddNewTransactionErrorSelector: sliceState => sliceState.addNewTransactionError,
	userAddNewTransactionModalSelector: sliceState => sliceState.addNewTransactionModal,
}

export const newTransactionActions = create => ({
	addNewTransaction: create.asyncThunk(
		TransactionRequestService.newTransaction,
		TransactionAsyncThunkHandler.NewTransaction
	),
	addNewTransactionModal: create.reducer(state => {
		state.addNewTransactionModal = !state.addNewTransactionModal
	})
})