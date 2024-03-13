import axios from 'axios'
import { DOMAIN } from '../constants/variableConstants'

export class UserRequestService {
	static async getUserInfo(userId, thunkAPI) {
		try {
			const userInfo = await axios.get(`${DOMAIN}/${userId}/user/get-user-info`)
			return userInfo.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e)
		}
	}
}