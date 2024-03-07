
import { UserRequestController } from '../controllers/UserRequestController'

export class UserRequestService {
	static async getUserInfo(userId, thunkAPI) {
		try {
			const userInfo = await UserRequestController.getUserInfo(userId)
			return userInfo.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e)
		}
	}
}