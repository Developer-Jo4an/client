import React from 'react'
import { View }  from 'react-native'

import ModifiedAccountName from './modified-account-name/ModifiedAccountName'
import ModifiedAccountCount from './modified-account-count/ModifiedAccountCount'
import ModifiedAccountType from './modifiedf-account-type/ModifiedAccountType'
import ModifiedAccountColor from './modified-account-color/ModifiedAccountColor'
import ModifiedAccountPreview from './modified-account-preview/ModifiedAccountPreview'

import { styles } from './styles'

const ModifiedAccount = ({ modifiedAccount, modifiedAccountVisible }) => {

	const [_, setModifiedAccountVisible] = modifiedAccountVisible
	const hideModifiedAccount = () => setModifiedAccountVisible(false)

	return (
		<View style={ styles.modifiedAccountContainer }>
			<ModifiedAccountName modifiedAccount={ modifiedAccount } />
			<ModifiedAccountCount modifiedAccount={ modifiedAccount } />
			<ModifiedAccountType modifiedAccount={ modifiedAccount } />
			<ModifiedAccountColor modifiedAccount={ modifiedAccount } />
			<ModifiedAccountPreview
				modifiedAccount={ modifiedAccount }
				hideModifiedAccount={ hideModifiedAccount }
			/>
		</View>
	)
}

export default ModifiedAccount