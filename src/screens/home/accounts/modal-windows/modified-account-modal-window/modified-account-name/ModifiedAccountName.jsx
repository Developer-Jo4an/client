import { memo } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { modifiedAccountIdSelector, modifiedAccountNameSelector } from "../../../../../../redux/slices/modified-account-slice/modifiedAccountSlice"

import ModifiedAccountNameInput from "./ModifiedAccountNameInput"

import { styles } from './styles'

const MemoizedModifiedAccountNameInput = memo(ModifiedAccountNameInput, (prev, next) => prev.id === next.id)

const ModifiedAccountName = () => {
	const modifiedAccountId = useSelector(modifiedAccountIdSelector)
	const modifiedAccountName = useSelector(modifiedAccountNameSelector)

	return (
		<View style={ styles.modifiedAccountNameInputWrapper }>
			<MemoizedModifiedAccountNameInput id={ modifiedAccountId } name={ modifiedAccountName } />
		</View>
	)
}

export default ModifiedAccountName