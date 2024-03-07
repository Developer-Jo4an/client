import { memo } from 'react'
import { View } from 'react-native'

import NewAccountName from './new-account-name/NewAccountName'
import NewAccountCount from './new-account-count/NewAccountCount'
import NewAccountType from './new-account-type/NewAccountType'
import NewAccountColor from './new-account-color/NewAccountColor'
import NewAccountPreview from './new-account-preview/NewAccountPreview'
import NewAccountButtons from './new-account-buttons/NewAccountButtons'

import { styles } from './styles'

const NewAccountModalWindow = memo(() => {
	return (
		<View style={ styles.newAccountModalWindowContainer }>
			<NewAccountName />
			<NewAccountCount />
			<NewAccountType />
			<NewAccountColor />
			<NewAccountPreview />
			<NewAccountButtons />
		</View>
	)
})

export default NewAccountModalWindow