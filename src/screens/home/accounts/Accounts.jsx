import React from 'react'
import { View, Text } from 'react-native'

import AccountAddBtn from './account-add-btn/AccountAddBtn'
import { MemoizedAccount } from '../../../components/account/Account'

import { styles } from './styles'

const Accounts = ({ accounts, modifiedAccountVisible, modifiedAccountDispatch }) => {

	const setModifiedAccount = account => {
		modifiedAccountDispatch({ type: 'set-account', action: account })
		modifiedAccountVisible[1](true)
	}

	return (
		<View style={ styles.accountsAccounts }>
			<View style={ styles.accountsHeader }>
				<Text style={ styles.accountsHeaderValue }>Accounts</Text>
				<AccountAddBtn/>
			</View>
			<View style={ styles.accountsWrapper }>
				{ accounts.map((account, index) => <MemoizedAccount key={ index } account={ account } callback={ setModifiedAccount }/>) }
			</View>
		</View>
	)
}

export default Accounts