import React, { memo } from 'react'
import { TextInput, View } from 'react-native'

import { styles } from './styles'

const NewAccountName = memo(({ newAccount }) => {

	const [_, newAccountDispatch] = newAccount

	return (
		<View style={ styles.newAccountNameContainer }>
			<TextInput
				maxLength={ 15 }
				placeholder={ 'Name' }
				onChangeText={ text => newAccountDispatch({ type: 'set-name', accountName: text })}
				style={ styles.newAccountInput }
			/>
		</View>
	)
}, (prev, next) => prev.newAccount[0].accountName === next.newAccount[0].accountName)

export default NewAccountName