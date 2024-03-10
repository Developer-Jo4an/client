import { memo, useCallback } from 'react'
import { Alert, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { modifiedAccountAccountSelector, modifiedAccountZeroing } from "../../../../../../redux/slices/modified-account-slice/modifiedAccountSlice"
import { modifiedAccountAction, modifiedAccountModalAction, userModifiedAccountErrorSelector, userModifiedAccountIsLoadingSelector } from "../../../../../../redux/slices/user-slice/sub-modified-account-slice/subModifiedAccountExports"
import { deleteAccountAction, userDeleteAccountErrorSelector, userDeleteAccountIsLoadingSelector } from "../../../../../../redux/slices/user-slice/sub-delete-account-slice/subDeleteAccountExports"

import ApplyBtn from '../../../../../../UI/buttons/apply-btn/ApplyBtn'
import DeleteBtn from '../../../../../../UI/buttons/delete-btn/DeleteBtn'
import TransparentLoader from '../../../../../../components/loaders/transparent-loader/TransparentLoader'

import { USER_ID } from "../../../../../../constants/variableConstants"

import { styles } from './styles'

const MemoizedTransparentLoader = memo(TransparentLoader, (prev, next) => prev.isVisible === next.isVisible)
const MemoizedDeleteBtn = memo(DeleteBtn)
const MemoizedApplyBtn = memo(ApplyBtn)
const ModifiedAccountButtons = () => {
	const dispatch = useDispatch()

	const modifiedAccount = useSelector(modifiedAccountAccountSelector)
	const modifiedAccountIsLoading = useSelector(userModifiedAccountIsLoadingSelector)
	const deleteAccountIsLoading = useSelector(userDeleteAccountIsLoadingSelector)
	const modifiedAccountError = useSelector(userModifiedAccountErrorSelector)
	const deleteAccountError = useSelector(userDeleteAccountErrorSelector)

	const deleteAccountRequest = useCallback(() => {
		dispatch(modifiedAccountModalAction())
		dispatch(deleteAccountAction({ userId: USER_ID, accountId: modifiedAccount._id }))
		dispatch(modifiedAccountZeroing())
	}, [modifiedAccount._id])

	const modifiedAccountRequest = useCallback(() => {
		dispatch(modifiedAccountModalAction())
		dispatch(modifiedAccountAction({ userId: USER_ID, account: modifiedAccount }))
		dispatch(modifiedAccountZeroing())
	}, [modifiedAccount])

	if (modifiedAccountError) Alert.alert('Error', modifiedAccountError)
	if (deleteAccountError) Alert.alert('Error', deleteAccountError)

	return (
		<View style={ styles.modifiedAccountButtons }>
			<View style={ styles.modifiedAccountButtonsWrapper }>
				<MemoizedDeleteBtn callback={ deleteAccountRequest } />
				<MemoizedApplyBtn callback={ modifiedAccountRequest } />
			</View>
			<MemoizedTransparentLoader isVisible={ modifiedAccountIsLoading || deleteAccountIsLoading } />
		</View>
	)
}

export default ModifiedAccountButtons