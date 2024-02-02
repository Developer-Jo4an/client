import React, { memo } from 'react'
import { Alert, View } from 'react-native'

import ApplyBtn from '../../../../../../UI/buttons/apply-btn/ApplyBtn'
import TransparentLoader from '../../../../../../components/loaders/transparent-loader/TransparentLoader'
import DeleteBtn from '../../../../../../UI/buttons/delete-btn/DeleteBtn'
import { Shadow } from 'react-native-shadow-2'
import { MemoizedAccount } from '../../../../../../components/account/Account'
import { SHADOW } from '../../../../../../constants/styleConstants'

import { useAppContext } from '../../../../../../../AppProvider'
import { useRequest } from '../../../../../../hooks/useRequest'
import { accountValidation, accountCloneValidation } from '../../../../../../constants/validationConstants'
import { RequestService } from '../../../../../../service/RequestService'

import { ENCRYPTED_ID } from '../../../../../../constants/variableConstants'

import { styles } from './styles'

const ModifiedAccountPreview = memo(({ modifiedAccount, hideModifiedAccount }) => {

	const { user } = useAppContext()
	const [userState, userDispatch] = user

	const [modifiedAccountState, modifiedAccountDispatch] = modifiedAccount

	const [modifiedAccountRequest, modifiedIsLoading, modifiedError] = useRequest(async () => {
		const validationAccount = accountValidation(modifiedAccountState)
		const cloneValidation = accountCloneValidation(modifiedAccountState, userState.accounts.find(account => account._id === modifiedAccountState._id))

		if (!validationAccount.validation) throw new Error(validationAccount.message)
		if (!cloneValidation.validation) throw new Error(cloneValidation.message)

		const userData = await RequestService.modifiedAccount(modifiedAccountState)

		if (!userData.status) throw new Error(userData.message)
		else userDispatch({ type: 'set-accounts', accounts: userData.accounts })
	}, () => {
		modifiedAccountDispatch({ type: 'reset' })
		hideModifiedAccount()
	})

	const [deleteAccountRequest, deleteIsLoading, deleteError] = useRequest(async () => {
		if (modifiedAccountState._id === ENCRYPTED_ID) throw new Error('This card cannot be deleted!')

		const userData = await RequestService.deleteAccount(modifiedAccountState._id)

		if (!userData.status) throw new Error(userData.message)
		else userDispatch({ type: 'set-accounts', accounts: userData.accounts })
	}, () => {
		modifiedAccountDispatch({ type: 'reset' })
		hideModifiedAccount()
	})

	if (modifiedError) Alert.alert('Error', modifiedError.toString())
	if (deleteError) Alert.alert('Error', deleteError.toString())

	return (
		<View style={ styles.modifiedAccountPreviewContainer }>
			<DeleteBtn callback={ deleteAccountRequest } />
			<Shadow distance={ 5 } startColor={ SHADOW } style={ styles.modifiedAccountShadow }>
				<MemoizedAccount callback={ () => {} } account={ modifiedAccountState } />
			</Shadow>
			<ApplyBtn callback={ modifiedAccountRequest } />
			<TransparentLoader isVisible={ modifiedIsLoading || deleteIsLoading } />
		</View>
	)
}, (prev, next) => {
	return (
		prev.modifiedAccount[0].accountName === next.modifiedAccount[0].accountName &&
		prev.modifiedAccount[0].count === next.modifiedAccount[0].count &&
		prev.modifiedAccount[0].accountType === next.modifiedAccount[0].accountType &&
		prev.modifiedAccount[0].accountSignColor[0] === next.modifiedAccount[0].accountSignColor[0] &&
		prev.modifiedAccount[0].accountSignColor[1] === next.modifiedAccount[0].accountSignColor[1]
	)
})

export default ModifiedAccountPreview