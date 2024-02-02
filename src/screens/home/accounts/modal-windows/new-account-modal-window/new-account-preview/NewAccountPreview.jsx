import React, { memo } from 'react'
import { Alert, View } from 'react-native'

import ApplyBtn from '../../../../../../UI/buttons/apply-btn/ApplyBtn'
import TransparentLoader from '../../../../../../components/loaders/transparent-loader/TransparentLoader'
import { Shadow } from 'react-native-shadow-2'
import { MemoizedAccount } from '../../../../../../components/account/Account'
import { SHADOW } from '../../../../../../constants/styleConstants'

import { useAppContext } from '../../../../../../../AppProvider'
import { useRequest } from '../../../../../../hooks/useRequest'
import { accountValidation } from '../../../../../../constants/validationConstants'
import { RequestService } from '../../../../../../service/RequestService'

import { styles } from './styles'

const NewAccountPreview = memo(({ newAccount, hideNewAccount, newAccountNameRef, newAccountCountRef }) => {

	const { user } = useAppContext()
    const [_, userDispatch] = user

    const [newAccountState, newAccountDispatch] = newAccount

    const [request, isLoading, error] = useRequest(async () => {
         const validation = accountValidation(newAccountState)

         if (!validation.validation) throw new Error(validation.message)

         const userData = await RequestService.addAccount(newAccountState)

         if (!userData.status) throw new Error(userData.message)
         else userDispatch({ type: 'set-accounts', accounts: userData.accounts })
    }, () => {
        newAccountDispatch({ type: 'reset' })
        hideNewAccount()
        if (newAccountNameRef.current) newAccountNameRef.current.clear()
        if (newAccountCountRef.current) newAccountCountRef.current.clear()
    })

	if (error) Alert.alert('Error', error.toString())

    return (
        <View style={ styles.newAccountPreviewContainer }>
            <Shadow distance={ 5 } startColor={ SHADOW } style={ styles.newAccountShadow }>
                <MemoizedAccount callback={ () => {} } account={ newAccountState } />
            </Shadow>
            <ApplyBtn callback={ request } />
            <TransparentLoader isVisible={ isLoading }/>
        </View>
    )
}, (prev, next) => {
	return (
		prev.newAccount[0].accountName === next.newAccount[0].accountName &&
		prev.newAccount[0].count === next.newAccount[0].count &&
		prev.newAccount[0].accountType === next.newAccount[0].accountType &&
		prev.newAccount[0].accountSignColor[0] === next.newAccount[0].accountSignColor[0] &&
		prev.newAccount[0].accountSignColor[1] === next.newAccount[0].accountSignColor[1]
	)
})

export default NewAccountPreview