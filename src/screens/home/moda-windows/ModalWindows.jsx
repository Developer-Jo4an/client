import React from 'react'
import {View, Text, StatusBar} from 'react-native'
import NewAccount from '../accounts/modal-windows/new-account/NewAccount'
import NewAccountProvider from '../accounts/modal-windows/new-account/NewAccountProvider'

import { styles } from './styles'

const ModalWindows = () => {

    console.log('rendrr')

    return (
        <View style={ styles.modalWindowsContainer }>
            <Text>eaf;,we,fwe,f</Text>
            {/*<NewAccountProvider>*/}
            {/*    <NewAccount/>*/}
            {/*</NewAccountProvider>*/}
        </View>
    )
}

export default ModalWindows