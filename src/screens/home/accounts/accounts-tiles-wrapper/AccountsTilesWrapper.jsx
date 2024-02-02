import React from 'react'
import { View } from 'react-native'

import { MemoizedAccount } from '../../../../components/account/Account'

import { styles } from './styles'

const AccountsTilesWrapper = ({ accounts, modifiedAccountVisible, modifiedAccount }) => {

    const [_, modifiedAccountDispatch] = modifiedAccount
    const [__, setModifiedAccountVisible] = modifiedAccountVisible

    const clickToCard = account => {
        modifiedAccountDispatch({ type: 'set-account', account })
        setModifiedAccountVisible(true)
    }

    return (
        <View style={ styles.accountsWrapper }>
            { accounts.map((account, index) => <MemoizedAccount key={ index } account={ account } callback={ clickToCard } />) }
        </View>
    )
}

export default AccountsTilesWrapper