import { userSlice } from '../userSlice'

export const {
	userNewTransactionIsLoadingSelector,
	userAddNewTransactionErrorSelector,
	userAddNewTransactionModalSelector,
} = userSlice.selectors

export const {
	addNewTransaction,
	addNewTransactionModal,
} = userSlice.actions