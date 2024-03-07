import { memo } from 'react'
import { View } from 'react-native'

import ModifiedAccountName from './modified-account-name/ModifiedAccountName'
import ModifiedAccountCount from './modified-account-count/ModifiedAccountCount'

import { styles } from './styles'

const ModifiedAccountModalWindow = memo(() => {
	return (
		<View style={ styles.modifiedAccountModalWindowContainer }>
			<ModifiedAccountName />
			<ModifiedAccountCount />
		</View>
	)
})

export default ModifiedAccountModalWindow