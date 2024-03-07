import React from 'react'
import { Alert, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { newAccountAccountSelector, newAccountZeroing } from '../../../../../../redux/slices/newAccountSlice'
import { addNewAccount, userAddNewAccountError, userNewAccountIsLoadingSelector } from '../../../../../../redux/slices/user-slice/userSlice'

import ApplyBtn from '../../../../../../UI/buttons/apply-btn/ApplyBtn'
import TransparentLoader from '../../../../../../components/loaders/transparent-loader/TransparentLoader'

import { USER_ID } from '../../../../../../constants/variableConstants'

import { styles } from './styles'

const NewAccountButtons = () => {
	const dispatch = useDispatch()

	const newAccount = useSelector(newAccountAccountSelector)
	const isLoading = useSelector(userNewAccountIsLoadingSelector)
	const error = useSelector(userAddNewAccountError)

	const addNewAccountRequest = () => {
		dispatch(newAccountZeroing())
		dispatch(addNewAccount({ userId: USER_ID, account: newAccount }))
	}

	if (error) { Alert.alert('Error', error) }

	return (
		<View style={ styles.newAccountButtons }>
			<View style={ styles.newAccountButtonsWrapper }>
				<ApplyBtn callback={ addNewAccountRequest } />
			</View>
			<TransparentLoader isVisible={ isLoading } />
		</View>
	)
}

export default NewAccountButtons