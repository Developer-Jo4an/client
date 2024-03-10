import { memo } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { modifiedAccountCountSelector, modifiedAccountIdSelector } from '../../../../../../redux/slices/modified-account-slice/modifiedAccountSlice'

import ModifiedAccountCountInput from './ModifiedAccountCountInput'

import { styles } from './styles'

const MemoizedModifiedAccountCountInput = memo(ModifiedAccountCountInput, (prev, next) => prev.id === next.id)

const ModifiedAccountCount = () => {
	const modifiedAccountId = useSelector(modifiedAccountIdSelector)
	const modifiedAccountCount = useSelector(modifiedAccountCountSelector)

	return (
		<View style={ styles.modifiedAccountCountInputWrapper }>
			<MemoizedModifiedAccountCountInput id={ modifiedAccountId } count={ modifiedAccountCount } />
		</View>
	)
}

export default ModifiedAccountCount