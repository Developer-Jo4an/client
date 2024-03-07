import axios from 'axios'
import { DOMAIN } from '../constants/variableConstants'

export class AccountsRequestController {
	static async addAccount(args) {

	}

	static async modifiedAccount(args) {
		const { userId, account } = args

		const userInfo = await axios.put(`${DOMAIN}/${userId}/accounts/modified-account`, { account: account })
		return userInfo
	}

	static async deleteAccount(args) {
		const { userId, accountId } = args

		const userInfo = await axios.delete(`${DOMAIN}/${userId}/delete-account/${accountId}`)
		return userInfo
	}
}