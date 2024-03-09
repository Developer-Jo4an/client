import { newAccountValidation } from '../constants/validationConstants'

import axios from 'axios'

import { DOMAIN } from '../constants/variableConstants'

export class AccountsRequestService {
	static async addAccount(args, thunkAPI) {
		try {
			const { userId, account } = args

			const { validation, message } = newAccountValidation(account)

			if (!validation) throw new Error(message)

			const userInfo = await axios.post(`${DOMAIN}/${userId}/accounts/add-account`, { account })
			return userInfo.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e)
		}
	}

	static async modifiedAccount(args, thunkAPI) {
		try {
			const { userId, account } = args

			const { validation, message } = newAccountValidation(account)

			if (!validation) throw new Error(message)

			const userInfo = await axios.put(`${DOMAIN}/${userId}/accounts/modified-account`, { account })
			return userInfo.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e)
		}
	}

	static async deleteAccount(args, thunkAPI) {
		try {
			const { userId, accountId } = args

			const userInfo = await axios.delete(`${DOMAIN}/${userId}/accounts/delete-account/${accountId}`)
			return userInfo.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e)
		}
	}
}