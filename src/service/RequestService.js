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
	static async modifiedAccount(account) {
		const userInfo = await axios.put(`${DOMAIN}/${USER_ID}/modified-account`, {
			account: account
		})
		return userInfo.data
	}
	static async deleteAccount(id) {
		const userInfo = await axios.delete(`${DOMAIN}/${USER_ID}/delete-account/${id}`)
		return userInfo.data
	}
}