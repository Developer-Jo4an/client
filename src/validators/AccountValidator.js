export class AccountValidator {
	static accountValidation(account) {
		if (typeof account.accountName !== 'string')
			return { isValidationF: false, message: 'Invalid account name' }

		if (account.accountName.length < 1 || account.accountName.length > 15)
			return { isValidation: false, message: 'Name length out of range' }

		if (account.count === Infinity || account.count === -Infinity || isNaN(account.count) || typeof account.count !== 'number')
			return { isValidation: false, message: 'Invalid account amount' }

		if (account.count.toString().length < 1 || account.count.toString().length > 15)
			return { isValidation: false, message: 'Amount out of range' }

		if (account.accountType !== 'cash' && account.accountType !== 'card')
			return { isValidation: false, message: 'Invalid account type' }

		if (
			typeof account.accountSignColor[0] !== 'string'
			|| typeof account.accountSignColor[1] !== 'string'
			|| !Array.isArray(account.accountSignColor)
			|| account.accountSignColor.length !== 2
		) return { isValidation: false, message: 'Invalid account color' }

		return { isValidation: true }
	}
}