import React from 'react'
import { View } from 'react-native'

import NewAccountName from './new-account-name/NewAccountName'
import NewAccountCount from './new-account-count/NewAccountCount'
import NewAccountType from './new-account-type/NewAccountType'
import NewAccountColor from './new-account-color/NewAccountColor'
import NewAccountPreview from './new-account-preview/NewAccountPreview'

import { useHomeContext } from '../../general/HomeProvider'

import { styles } from './styles'

const NewAccount = () => {
	const { newAccount, newAccountVisible, newAccountNameInput, newAccountCountInput } = useHomeContext()
	const closeMW = () => newAccountVisible[1](false)

	return (
		<View style={ styles.newAccountContainer }>
			<NewAccountName
				newAccount={ newAccount }
				newAccountNameInput={ newAccountNameInput }
			/>
			<NewAccountCount
				newAccount={ newAccount }
				newAccountCountInput={ newAccountCountInput }
			/>
			<NewAccountType newAccount={ newAccount } />
			<NewAccountColor newAccount={ newAccount } />
			<NewAccountPreview
				newAccount={ newAccount }
				closeMW={ closeMW }
				newAccountNameInput={ newAccountNameInput }
				newAccountCountInput={ newAccountCountInput }
			/>
		</View>
	)
}

export default NewAccount