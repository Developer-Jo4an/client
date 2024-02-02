import React, { memo } from 'react'
import { Text, View } from 'react-native'

import AddBtn from '../../../../UI/buttons/add-btn/AddBtn'

import { styles } from '../styles'

const AccountHeader = memo(({ newAccountVisible }) => {

    const [_, setNewAccountVisible] = newAccountVisible

    return (
        <View style={ styles.accountsHeader }>
            <Text style={ styles.accountsHeaderValue }>Accounts</Text>
            <AddBtn callback={ () => setNewAccountVisible(true) } />
        </View>
    )
})

export default AccountHeader