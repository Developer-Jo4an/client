import React, { useState } from 'react'
import { View, Text, Modal } from 'react-native'

import AddBtn from '../../../UI/buttons/add-btn/AddBtn'
import ModalWindowBottom from '../../../components/modal-windows/modal-window-bottom/ModalWindowBottom'
import { MemoizedAccount } from '../../../components/account/Account'
import NewAccount from './modal-windows/new-account/NewAccount'
import NewAccountProvider from './modal-windows/new-account/NewAccountProvider'

import { styles } from './styles'

const Accounts = ({ accounts }) => {

	const [newAccountMW, setNewAccountMW] = useState(false)

	return (
		<View style={ styles.accountsAccounts }>
			<View style={ styles.accountsHeader }>
				<Text style={ styles.accountsHeaderValue }>Accounts</Text>
				<AddBtn callback={() => setNewAccountMW(true)}/>
			</View>
			<View style={ styles.accountsWrapper }>
				{ accounts.map((account, index) => <MemoizedAccount key={ index } account={ account } callback={ () => {} }/>) }
			</View>
		</View>
	)
}

export default Accounts