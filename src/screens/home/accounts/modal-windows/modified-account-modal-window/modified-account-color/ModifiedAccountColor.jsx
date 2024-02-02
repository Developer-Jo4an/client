import React, { memo } from 'react'
import { FlatList, View } from 'react-native'

import { MemoizedColorCircle } from '../../../../../../components/color-circle/ColorCircle'

import { CIRCLE_COLORS } from '../../../../../../constants/variableConstants'

import { styles } from './styles'

const ModifiedAccountColor = memo(({ modifiedAccount }) => {

		const [modifiedAccountState, modifiedAccountDispatch] = modifiedAccount

		const changeColor = item => modifiedAccountDispatch({ type: 'set-color', accountSignColor: item })

		return (
			<View style={ styles.modifiedAccountColorContainer }>
				<FlatList
					data={ CIRCLE_COLORS }
					renderItem={ ({ item }) =>
						<MemoizedColorCircle
							callback={ changeColor }
							colorList={ item }
							state={ modifiedAccountState.accountSignColor }
						/>
					}
					keyExtractor={ (_, index) => index.toString() }
					horizontal={ true }
					contentContainerStyle={ styles.modifiedAccountContent }
				/>
			</View>
		)
	}, (prev, next) =>
		(
			prev.modifiedAccount[0].accountSignColor[0] === next.modifiedAccount[0].accountSignColor[0] &&
			prev.modifiedAccount[0].accountSignColor[1] === next.modifiedAccount[0].accountSignColor[1]
		)
)

export default ModifiedAccountColor