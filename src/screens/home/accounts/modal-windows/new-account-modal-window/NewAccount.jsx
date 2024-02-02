import React from 'react'
import { View } from 'react-native'

import NewAccountName from './new-account-name/NewAccountName'
import NewAccountCount from './new-account-count/NewAccountCount'
import NewAccountType from './new-account-type/NewAccountType'
import NewAccountColor from './new-account-color/NewAccountColor'
import NewAccountPreview from './new-account-preview/NewAccountPreview'

import { styles } from './styles'

const NewAccount = ({ newAccount, newAccountVisible, newAccountNameRef, newAccountCountRef }) => {

	const [_, setNewAccountVisible] = newAccountVisible
	const hideNewAccount = () => setNewAccountVisible(false)

	return (
		<View style={ styles.newAccountContainer }>
			<NewAccountName newAccount={ newAccount } newAccountNameRef={ newAccountNameRef } />
			<NewAccountCount newAccount={ newAccount } newAccountCountRef={ newAccountCountRef } />
			<NewAccountType newAccount={ newAccount } />
			<NewAccountColor newAccount={ newAccount } />
			<NewAccountPreview
				newAccount={ newAccount }
				hideNewAccount={ hideNewAccount }
				newAccountNameRef={ newAccountNameRef }
				newAccountCountRef={ newAccountCountRef }
			/>
		</View>
	)
}

export default NewAccount