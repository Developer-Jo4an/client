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