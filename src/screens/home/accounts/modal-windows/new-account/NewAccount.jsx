import React from 'react'
import { View } from 'react-native'

import NewAccountName from './new-account-name/NewAccountName'
import NewAccountCount from './new-account-count/NewAccountCount'
import NewAccountType from './new-account-type/NewAccountType'
import NewAccountColor from './new-account-color/NewAccountColor'
import NewAccountPreview from './new-account-preview/NewAccountPreview'

import { useNewAccountContext } from './NewAccountProvider'

import { styles } from './styles'

const NewAccount = () => {

	const { newAccount, visible } = useNewAccountContext()

	const [_, setVisible] = visible
	const closeMW = () => setVisible(false)

	return (
		<View style={ styles.newAccountContainer }>
			<NewAccountName newAccount={ newAccount } />
			<NewAccountCount newAccount={ newAccount } />
			<NewAccountType newAccount={ newAccount } />
			<NewAccountColor newAccount={ newAccount } />
			<NewAccountPreview newAccount={ newAccount } closeMW={ closeMW }></NewAccountPreview>
		</View>
	)
}

export default NewAccount