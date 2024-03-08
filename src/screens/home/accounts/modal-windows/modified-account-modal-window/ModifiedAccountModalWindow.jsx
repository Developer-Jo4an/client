import { memo } from 'react'
import { View } from 'react-native'

import ModifiedAccountName from './modified-account-name/ModifiedAccountName'
import ModifiedAccountCount from './modified-account-count/ModifiedAccountCount'
import ModifiedAccountType from './modified-account-type/ModifiedAccountType'
import ModifiedAccountColor from './modified-account-color/ModifiedAccountColor'
import ModifiedAccountPreview from './modified-account-preview/ModifiedAccountPreview'
import ModifiedAccountButtons from './modified-accounts-buttons/ModifiedAccountButtons'

import { styles } from './styles'

const ModifiedAccountModalWindow = memo(() => {
	return (
		<View style={ styles.modifiedAccountModalWindowContainer }>
			<ModifiedAccountName />
			<ModifiedAccountCount />
			<ModifiedAccountType />
			<ModifiedAccountColor />
			<ModifiedAccountPreview />
			<ModifiedAccountButtons />
		</View>
	)
})

export default ModifiedAccountModalWindow