import React, { memo } from 'react'
import { TextInput, View } from 'react-native'

import { styles } from './styles'

const ModifiedAccountName = memo(({ modifiedAccount, modifiedAccountNameInput }) => {

	const [modifiedAccountState, modifiedAccountDispatch] = modifiedAccount

	return (
		<View style={ styles.modifiedAccountNameContainer }>
			<TextInput
				defaultValue={ modifiedAccountState.accountName }
				ref={ modifiedAccountNameInput }
				maxLength={ 15 }
				placeholder={ 'Name' }
				onChangeText={ text => modifiedAccountDispatch({ type: 'set-name', accountName: text })}
				style={ styles.modifiedAccountInput }
			/>
		</View>
	)
}, (prev, next) => prev.modifiedAccount[0].accountName === next.modifiedAccount[0].accountName)

export default ModifiedAccountName