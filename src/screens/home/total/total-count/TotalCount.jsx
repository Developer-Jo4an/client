import React from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'

import { userAccountsSelector } from '../../../../redux/slices/user-slice/userSlice'

import { styles } from './styles'

const TotalCount = () => {
	const accounts = useSelector(userAccountsSelector)

	const amount = accounts.reduce((acc, account) => acc + account.count, 0).toFixed(2)

	return <Text style={ styles.totalAmount(amount) }>{ amount } $</Text>
}

export default TotalCount