import React, { memo } from 'react'
import { TextInput, View } from 'react-native'

import { styles } from './styles'

const ModifiedAccountCount = memo(({ modifiedAccount, modifiedAccountCountInput }) => {

	const [_, modifiedAccountDispatch] = modifiedAccount

	return (
		<View style={ styles.modifiedAccountCountContainer }>
			<TextInput
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