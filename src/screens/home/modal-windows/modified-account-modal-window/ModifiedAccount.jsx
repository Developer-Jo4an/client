import React from 'react'
import { View }  from 'react-native'

import ModifiedAccountName from './modified-account-name/ModifiedAccountName'
import ModifiedAccountCount from './modified-account-count/ModifiedAccountCount'
import ModifiedAccountType from './modifiedf-account-type/ModifiedAccountType'
import ModifiedAccountColor from './modified-account-color/ModifiedAccountColor'
import ModifiedAccountPreview from './modified-account-preview/ModifiedAccountPreview'

import { useHomeContext } from '../../general/HomeProvider'

import { styles } from './styles'

const ModifiedAccount = () => {

	const { modifiedAccount, modifiedAccountVisible, modifiedAccountNameInput, modifiedAccountCountInput } = useHomeContext()
	const closeMW = () => modifiedAccountVisible[1](false)
	return (
		<View style={ styles.modifiedAccountContainer }>
			<ModifiedAccountName
				modifiedAccount={ modifiedAccount }
				modifiedAccountNameInput={ modifiedAccountNameInput }
			/>
			<ModifiedAccountCount
				modifiedAccount={ modifiedAccount }
				modifiedAccountCountInput={ modifiedAccountCountInput }
			/>
			<ModifiedAccountType modifiedAccount={ modifiedAccount } />
			<ModifiedAccountColor modifiedAccount={ modifiedAccount } />
			<ModifiedAccountPreview
				modifiedAccount={ modifiedAccount }
				closeMW={ closeMW }
				modifiedAccountNameInput={ modifiedAccountNameInput }
				modifiedAccountCountInput={ modifiedAccountCountInput }
			/>
		</View>
	)
}

export default ModifiedAccount