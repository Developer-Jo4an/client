import React from 'react'
import { View, Text } from 'react-native'

import { useRoute } from '@react-navigation/native'

import { styles } from './styles'

const Navigation = () => {

    const route = useRoute().name

    return (
        <View style={ styles.navigationContainer }>
            <Text>wef,pewofewfewpfew,f</Text>
        </View>
    )
}

export default Navigation