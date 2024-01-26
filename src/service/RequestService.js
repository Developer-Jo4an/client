// Service which stores requests
import axios from 'axios'
import { DOMAIN, USER_ID } from '../constants/variableConstants'

export class RequestService {
	static async getUserInfo() {
		const userInfo = await axios.get(`${DOMAIN}/get-user-info/${USER_ID}`)
		return userInfo.data
	}
	static async addAccount(account) {
		const userInfo = await axios.post(`${DOMAIN}/${USER_ID}/add-account`, {
			account: account
		})
		return userInfo.data
	}
}