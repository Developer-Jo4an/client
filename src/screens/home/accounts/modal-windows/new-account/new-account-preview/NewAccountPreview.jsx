import React from 'react'
import { Alert, View } from 'react-native'

import ApplyBtn from '../../../../../../UI/buttons/apply-btn/ApplyBtn'
import { MemoizedAccount } from '../../../../../../components/account/Account'
import TransparentLoader from '../../../../../../components/loaders/transparent-loader/TransparentLoader'

import { RequestService } from '../../../../../../service/RequestService'
import { useAppContext } from '../../../../../../../AppProvider'
import { Shadow } from 'react-native-shadow-2'
import { useRequest } from '../../../../../../hooks/useRequest'
import { accountValidation } from '../../../../../../constants/validationConstants'

import { SHADOW } from '../../../../../../constants/styleConstants'
import { styles } from './styles'

const NewAccountPreview = ({ newAccount, closeMW }) => {

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
        closeMW(false)
    })

    if (error) Alert.alert('Error', error.toString())

    return (
        <View style={ styles.newAccountPreviewContainer }>
            <Shadow distance={ 5 } startColor={ SHADOW } style={ styles.newAccountShadow }>
                <MemoizedAccount callback={ () => {} } account={ newAccountState } />
            </Shadow>
            <ApplyBtn callback={ request } />
            <TransparentLoader visible={ isLoading }/>
        </View>
    )
}

export default NewAccountPreview