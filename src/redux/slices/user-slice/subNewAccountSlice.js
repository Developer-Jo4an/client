export const initialNewAccountState = {
	addNewAccountIsLoading: false,
	addNewAccountError: null,
	addNewAccountModal: false,
}

export const newAccountSelectors = {
	userNewAccountIsLoadingSelector: sliceState => sliceState.addNewAccountIsLoading,
	userAddNewAccountError: sliceState => sliceState.addNewAccountError,
	userAddNewAccountModalSelector: sliceState => sliceState.addNewAccountModal,
}