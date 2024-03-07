export class AccountsAsyncThunkHandler {
	static addNewAccount = {
		pending: state => {
			state.addNewAccountIsLoading = true
		},
		fulfilled: (state, action) => {
			state.user.accounts = action.payload.accounts
		},
		rejected: (state, action) => {
			state.addNewAccountError = action.error.message
		},
		settled: state => {
			state.addNewAccountIsLoading = false
			state.addNewAccountModal = false
		}
	}
}