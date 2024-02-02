import React from 'react'
import { View } from 'react-native'

import AccountHeader from './account-header/AccountHeader'
import AccountsTilesWrapper from './accounts-tiles-wrapper/AccountsTilesWrapper'
import ModalWindowBottom from '../../../components/modal-windows/modal-window-bottom/ModalWindowBottom'
import NewAccount from './modal-windows/new-account-modal-window/NewAccount'
import ModifiedAccount from './modal-windows/modified-account-modal-window/ModifiedAccount'

import { useAccountsContext } from './accounts-provider/AccountsProvider'

import { styles } from './styles'

const AccountsWrapper = ({ accounts }) => {

	const {
		newAccount,
		newAccountVisible,
		modifiedAccount,
		modifiedAccountVisible,
		newAccountNameRef,
		newAccountCountRef
	} = useAccountsContext()

	return (
		<View style={ styles.accountsAccounts }>
			<AccountHeader
				newAccountVisible={ newAccountVisible }
			/>
			<AccountsTilesWrapper
				accounts={ accounts }
				modifiedAccountVisible={ modifiedAccountVisible }
				modifiedAccount={ modifiedAccount }
			/>
			<ModalWindowBottom visible={ newAccountVisible } contentHeight={ 350 }>
				<NewAccount
					newAccount={ newAccount }
					newAccountVisible={ newAccountVisible }
					newAccountNameRef={ newAccountNameRef }
					newAccountCountRef= { newAccountCountRef }
				/>
			</ModalWindowBottom>
			<ModalWindowBottom visible={ modifiedAccountVisible } contentHeight={ 350 }>
				<ModifiedAccount
					modifiedAccount={ modifiedAccount }
					modifiedAccountVisible={ modifiedAccountVisible }
				/>
			</ModalWindowBottom>
		</View>
	)
}

export default AccountsWrapper