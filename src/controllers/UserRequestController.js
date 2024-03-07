import axios from 'axios'
import { DOMAIN } from '../constants/variableConstants'

export class UserRequestController {
	static async getUserInfo(userId) {
		const userInfo = await axios.get(`${DOMAIN}/${userId}/get-user-info`)
		return userInfo
	}
}