export class UserAsyncThunksHandler {
	static getUserInfo = {
		pending: state => { },
		fulfilled: (state, action) => { state.user = action.payload.userInfo },
		rejected: (state, action) => { state.error = action.error.message },
		settled: state => { state.isLoading = false }
	}
}