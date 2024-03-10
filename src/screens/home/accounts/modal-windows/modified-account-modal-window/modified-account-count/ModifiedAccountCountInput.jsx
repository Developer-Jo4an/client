import React, { useEffect, useRef } from 'react'
import { TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import { modifiedAccountAddCountAction } from "../../../../../../redux/slices/modified-account-slice/modifiedAccountSlice"

import { styles } from "./styles"

const ModifiedAccountCountInput = ({ count }) => {
    const dispatch = useDispatch()
    const countInputRef = useRef()

    useEffect(() => countInputRef && countInputRef.current.setNativeProps({ text: count.toString() }))

    return (
        <TextInput
            ref={ countInputRef }
            style={ styles.modifiedAccountCountInput }
            placeholder={ 'Count' }
            keyboardType={ 'numeric' }
            onChangeText={ text => dispatch(modifiedAccountAddCountAction(+text)) }
        />
    )
}

export default ModifiedAccountCountInput