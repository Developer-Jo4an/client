import axios from 'axios'

import { AccountValidator } from '../validators/AccountValidator'

import { DOMAIN } from '../constants/variableConstants'

const ACCOUNTS_PATH = 'accounts'

const ADD_ACCOUNT = 'add-account'
const MODIFIED_ACCOUNT = 'add-account'
const DELETE_ACCOUNT = 'delete-account'

export class AccountsRequestService {
	static async addAccount(args, thunkAPI) {
		try {
			const { userId, account } = args

			const { isValidation, message } = AccountValidator.accountValidation(account)

			if (!isValidation) throw new Error(message)

			const userInfo = await axios.post(`${DOMAIN}/${userId}/${ACCOUNTS_PATH}/${ADD_ACCOUNT}`, { account })
			return userInfo.data
		} catch (e) { return thunkAPI.rejectWithValue(e) }
	}

	static async modifiedAccount(args, thunkAPI) {
		try {
			const { userId, account } = args

			const { isValidation, message } = AccountValidator.accountValidation(account)

			if (!isValidation) throw new Error(message)

			const userInfo = await axios.put(`${DOMAIN}/${userId}/${ACCOUNTS_PATH}/${MODIFIED_ACCOUNT}`, { account })
			return userInfo.data
		} catch (e) { return thunkAPI.rejectWithValue(e) }
	}

	static async deleteAccount(args, thunkAPI) {
		try {
			const { userId, accountId } = args

			const userInfo = await axios.delete(`${DOMAIN}/${userId}/${ACCOUNTS_PATH}/${DELETE_ACCOUNT}/${accountId}`)
			return userInfo.data
		} catch (e) { return thunkAPI.rejectWithValue(e) }
	}
}