import { memo, useCallback } from 'react'
import { Alert, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { newAccountAccountSelector, newAccountZeroing } from '../../../../../../redux/slices/newAccountSlice'
import { addNewAccount, addNewAccountModal, userAddNewAccountErrorSelector, userNewAccountIsLoadingSelector } from "../../../../../../redux/slices/user-slice/sub-new-account-slice/subNewAccountExports"

import ApplyBtn from '../../../../../../UI/buttons/apply-btn/ApplyBtn'
import TransparentLoader from '../../../../../../components/loaders/transparent-loader/TransparentLoader'

import { USER_ID } from '../../../../../../constants/variableConstants'

import { styles } from './styles'

const MemoizedTransparentLoader = memo(TransparentLoader, (prev, next) => prev.isVisible === next.isVisible)
const MemoizedApplyBtn = memo(ApplyBtn)

const NewAccountButtons = () => {
	const dispatch = useDispatch()

	const newAccount = useSelector(newAccountAccountSelector)
	const isLoading = useSelector(userNewAccountIsLoadingSelector)
	const error = useSelector(userAddNewAccountErrorSelector)

	const addNewAccountRequest = useCallback(() => {
		dispatch(addNewAccountModal())
		dispatch(addNewAccount({ userId: USER_ID, account: newAccount }))
		dispatch(newAccountZeroing())
	}, [newAccount])

	if (error) { Alert.alert('Error', error) }

	return (
		<View style={ styles.newAccountButtons }>
			<View style={ styles.newAccountButtonsWrapper }>
				<MemoizedApplyBtn callback={ addNewAccountRequest } />
			</View>
			<MemoizedTransparentLoader isVisible={ isLoading } />
		</View>
	)
}

export default NewAccountButtons