import React, { memo } from 'react'
import { FlatList, View } from 'react-native'

import { MemoizedColorCircle } from '../../../../../../components/color-circle/ColorCircle'

import { CIRCLE_COLORS } from '../../../../../../constants/variableConstants'

import { styles } from './styles'

const NewAccountColor = memo(({ newAccount }) => {

	const [newAccountState, newAccountDispatch] = newAccount

    const changeColor = item => newAccountDispatch({ type: 'set-color', accountSignColor: item })

    return (
        <View style={ styles.newAccountColorContainer }>
            <FlatList
                data={ CIRCLE_COLORS }
                renderItem={ ({ item }) =>
                    <MemoizedColorCircle
                        callback={ changeColor }
                        colorList={ item }
                        state={ newAccountState.accountSignColor }
                    />
                }
                keyExtractor={ (_, index) => index.toString() }
                horizontal={ true }
                contentContainerStyle={ styles.newAccountContent }
            />
        </View>
    )
}, (prev, next) =>
    (
        prev.newAccount[0].accountSignColor[0] === next.newAccount[0].accountSignColor[0] &&
        prev.newAccount[0].accountSignColor[1] === next.newAccount[0].accountSignColor[1]
    )
)

export default NewAccountColor