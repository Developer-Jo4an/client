import { useEffect, useRef } from 'react'
import { TextInput } from 'react-native'
import { useDispatch } from 'react-redux'

import { modifiedAccountAddNameAction } from "../../../../../../redux/slices/modifiedAccountSlice"

import { styles } from "./styles"

const ModifiedAccountNameInput = ({ name }) => {
    const dispatch = useDispatch()
    const nameInputRef = useRef()

    useEffect(() => nameInputRef.current && nameInputRef.current.setNativeProps({ text: name }))

    return (
        <TextInput
            ref={ nameInputRef }
            style={ styles.modifiedAccountNameInput }
            placeholder={ 'Name' }
            onChangeText={ text => dispatch(modifiedAccountAddNameAction(text)) }
        />
    )
}

export default ModifiedAccountNameInput