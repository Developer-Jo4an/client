import React, { memo } from 'react'
import { TextInput, View } from 'react-native'

import { styles } from './styles'

const NewAccountCount = memo(({ newAccount, newAccountCountRef }) => {

	const [_, newAccountDispatch] = newAccount

	return (
		<View style={ styles.newAccountCountContainer }>
			<TextInput
				ref={ newAccountCountRef }
				defaultValue={''}
				maxLength={ 15 }
				placeholder={ 'Count' }
				onChangeText={ text => newAccountDispatch({ type: 'set-count', count: text }) }
				style={ styles.newAccountInput }
				keyboardType={ 'numeric' }
			/>
		</View>
	)
}, (prev, next) => prev.newAccount[0].count === next.newAccount[0].count)

export default NewAccountCount