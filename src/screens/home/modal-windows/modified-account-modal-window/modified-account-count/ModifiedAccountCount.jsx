import React, { memo } from 'react'
import { TextInput, View } from 'react-native'

import { styles } from './styles'

const ModifiedAccountCount = memo(({ modifiedAccount, modifiedAccountCountInput }) => {

	const [modifiedAccountState, modifiedAccountDispatch] = modifiedAccount

	return (
		<View style={ styles.modifiedAccountCountContainer }>
			<TextInput
				defaultValue={ modifiedAccountState.count.toString() }
				ref={ modifiedAccountCountInput }
				maxLength={ 15 }
				placeholder={ 'Count' }
				onChangeText={ text => modifiedAccountDispatch({ type: 'set-count', count: text }) }
				style={ styles.modifiedAccountInput }
				keyboardType={ 'numeric' }
			/>
		</View>
	)
}, (prev, next) => prev.modifiedAccount[0].count === next.modifiedAccount[0].count)

export default ModifiedAccountCount