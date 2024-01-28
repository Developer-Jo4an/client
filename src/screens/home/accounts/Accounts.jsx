import React from 'react'
import { View } from 'react-native'

import AccountHeader from './account-header/AccountHeader'
import { MemoizedAccount } from '../../../components/account/Account'

import { styles } from './styles'

const Accounts = ({ accounts, modifiedAccountVisible, modifiedAccount }) => {

	const setModifiedAccount = account => {
		modifiedAccount[1]({ type: 'set-account', account })
		modifiedAccountVisible[1](true)
	}

	return (
		<View style={ styles.accountsAccounts }>
			<AccountHeader />
			<View style={ styles.accountsWrapper }>
				{ accounts.map((account, index) => <MemoizedAccount key={ index } account={ account } callback={ setModifiedAccount }/>) }
			</View>
		</View>
	)
}

export default Accounts