import { useEffect, useRef } from 'react'
import { TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { newAccountAddName } from '../../../../../../redux/slices/new-account-slice/newAccountSlice'
import { userNewAccountIsLoadingSelector } from '../../../../../../redux/slices/user-slice/sub-new-account-slice/subNewAccountExports'

import { styles } from './styles'

const NewAccountName = () => {
	const dispatch = useDispatch()

	const nameInputRef = useRef()

	const isLoading = useSelector(userNewAccountIsLoadingSelector)

	useEffect(() => { isLoading && nameInputRef.current.clear() }, [isLoading])

	return (
		<View style={ styles.newAccountNameInputWrapper }>
			<TextInput
				ref={ nameInputRef }
				style={ styles.newAccountNameInput }
				placeholder={ 'Name' }
				onChangeText={ text => dispatch(newAccountAddName(text)) }
			/>
		</View>
	)
}

export default NewAccountName