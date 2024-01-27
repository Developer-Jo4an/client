import React, { memo } from 'react'
import { Alert, View } from 'react-native'

import ApplyBtn from '../../../../../UI/buttons/apply-btn/ApplyBtn'
import CancelBtn from '../../../../../UI/buttons/cancel-btn/CancelBtn'
import TransparentLoader from '../../../../../components/loaders/transparent-loader/TransparentLoader'
import { Shadow } from 'react-native-shadow-2'
import { MemoizedAccount } from '../../../../../components/account/Account'
import { SHADOW } from '../../../../../constants/styleConstants'

import { useAppContext } from '../../../../../../AppProvider'
import { useRequest } from '../../../../../hooks/useRequest'
import { accountValidation } from '../../../../../constants/validationConstants'
import { RequestService } from '../../../../../service/RequestService'

import { styles } from './styles'

const ModifiedAccountPreview = memo(({ modifiedAccount, closeMW, modifiedAccountNameInput, modifiedAccountCountInput }) => {

	const { user } = useAppContext()
	const [userState, userDispatch] = user

	const [modifiedAccountState, modifiedAccountDispatch] = modifiedAccount

	const [request, isLoading, error] = useRequest(async () => {
		const validation = accountValidation(modifiedAccountState)

		if (!validation.validation) throw new Error(validation.message)

		const userData = await RequestService.addAccount(modifiedAccountState)

		if (!userData.status) throw new Error(userData.message)
		else userDispatch({ type: 'set-accounts', accounts: userData.accounts })
	}, () => {
		modifiedAccountDispatch({ type: 'reset' })
		closeMW()
		if (modifiedAccountNameInput.current) modifiedAccountNameInput.current.clear()
		if (modifiedAccountCountInput.current) modifiedAccountCountInput.current.clear()
	})

	if (error) Alert.alert('Error', error.toString())

	const cancelFunction = () => {
		const prevAccountState = userState.accounts.find(account => account._id === modifiedAccountState._id)
		modifiedAccountDispatch({ type: 'set-account', action: prevAccountState })
	}

	return (
		<View style={ styles.modifiedAccountPreviewContainer }>
			<CancelBtn callback={ cancelFunction }/>
			<Shadow distance={ 5 } startColor={ SHADOW } style={ styles.modifiedAccountShadow }>
				<MemoizedAccount callback={ () => {} } account={ modifiedAccountState } />
			</Shadow>
			<ApplyBtn callback={ request } />
			<TransparentLoader isVisible={ isLoading }/>
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