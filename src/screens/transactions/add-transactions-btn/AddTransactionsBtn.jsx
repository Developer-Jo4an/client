import React from 'react'
import { Alert } from 'react-native'

import FixedAddBtn from '../../../UI/buttons/fixed-add-btn/fixed-add-btn'

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../constants/variableConstants'

import { styles } from './styles'

const AddTransactionsBtn = () => {

    const callback = () => {
        Alert.alert('Нажал кнопку')
    }

    const topPosition = SCREEN_HEIGHT - 180
    const leftPosition = SCREEN_WIDTH - 80

    return (
        <FixedAddBtn callback={ callback } position={{ top: topPosition, left: leftPosition }} hostName={ 'transactions-page' }/>
    )
}

export default AddTransactionsBtn