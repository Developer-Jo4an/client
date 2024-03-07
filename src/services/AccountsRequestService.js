import { AccountsRequestController } from '../controllers/AccountsRequestController'
import { newAccountValidation } from '../constants/validationConstants'

import axios from 'axios'

import { DOMAIN } from '../constants/variableConstants'

export class AccountsRequestService {
	static async addAccount(args, thunkAPI) {
		try {
			const { userId, account } = args

			const { validation, message } = newAccountValidation(account)

			if (!validation) throw new Error(message)

			const userInfo = await axios.post(`${DOMAIN}/${(userId)}/accounts/add-account`, { account })
			return userInfo.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e)
		}
	}

	static async modifiedAccount(args, thunkAPI) {
		try {
			const userInfo = await AccountsRequestController.modifiedAccount(args)
			return userInfo.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e)
		}
	}

	static async deleteAccount(args, thunkAPI) {
		try {
			const userInfo = await AccountsRequestController.deleteAccount(args)
			return userInfo.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e)
		}
	}
}