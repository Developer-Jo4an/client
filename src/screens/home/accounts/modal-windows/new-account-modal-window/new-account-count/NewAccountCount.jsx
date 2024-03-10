import { useEffect, useRef } from 'react'
import { TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { newAccountAddCount } from '../../../../../../redux/slices/new-account-slice/newAccountSlice'
import { userNewAccountIsLoadingSelector } from "../../../../../../redux/slices/user-slice/sub-new-account-slice/subNewAccountExports"

import { styles } from './styles'

const NewAccountCount = () => {
	const dispatch = useDispatch()

	const countInputRef = useRef()

	const isLoading = useSelector(userNewAccountIsLoadingSelector)

	useEffect(() => { isLoading && countInputRef.current.clear() }, [isLoading])

	return (
		<View style={ styles.newAccountCountInputWrapper }>
			<TextInput
				ref={ countInputRef }
				style={ styles.newAccountCountInput }
				placeholder={ 'Count' }
				keyboardType={ 'numeric' }
				onChangeText={ text => dispatch(newAccountAddCount(+text)) }
			/>
		</View>
	)
}

export default NewAccountCount