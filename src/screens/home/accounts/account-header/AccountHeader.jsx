import React, { memo } from 'react'
import { Text, View } from 'react-native'

import AccountAddBtn from '../account-add-btn/AccountAddBtn'

import { styles } from '../styles'

const AccountHeader = memo(() => {
    return (
        <View style={ styles.accountsHeader }>
            <Text style={ styles.accountsHeaderValue }>Accounts</Text>
            <AccountAddBtn/>
        </View>
    )
})

export default AccountHeader