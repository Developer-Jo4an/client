export class AccountsAsyncThunkHandler {
	static addNewAccount = {
		pending: state => {
			state.addNewAccountIsLoading = true
		},
		fulfilled: (state, action) => {
			state.user.accounts = action.payload.accounts
		},
		rejected: (state, action) => {
			state.addNewAccountError = action.payload
		},
		settled: state => {
			state.addNewAccountIsLoading = false
		}
	}

	static modifiedAccount = {
		pending: state => {
			state.modifiedAccountIsLoading = true
		},
		fulfilled: (state, action) => {
			state.user.accounts = action.payload.accounts
		},
		rejected: (state, action) => {
			state.modifiedAccountError = action.payload
		},
		settled: state => {
			state.modifiedAccountIsLoading = false
		}
	}

	static deleteAccount = {
		pending: state => {
			state.deleteAccountIsLoading = true
		},
		fulfilled: (state, action) => {
			state.user.accounts = action.payload.accounts
		},
		rejected: (state, action) => {
			state.deleteAccountError = action.payload
		},
		settled: state => {
			state.deleteAccountIsLoading = false
		}
	}
}