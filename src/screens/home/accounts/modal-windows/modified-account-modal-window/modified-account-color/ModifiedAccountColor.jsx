import { memo, useCallback } from 'react'
import { FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { modifiedAccountAddColorAction, modifiedAccountColorSelector } from '../../../../../../redux/slices/modifiedAccountSlice'

import ColorCircle from '../../../../../../components/color-circle/ColorCircle'

import { CIRCLE_COLORS } from '../../../../../../constants/variableConstants'

import { styles } from './styles'

const MemoizedColorCircle = memo(ColorCircle)

const ModifiedAccountColor = () => {
	const dispatch = useDispatch()

	const modifiedAccountActiveColor = useSelector(modifiedAccountColorSelector)

	const modifiedAccountColor = useCallback(color => dispatch(modifiedAccountAddColorAction(color)), [])

	return (
		<View style={ styles.modifiedAccountColorContainer }>
			<FlatList
				data={ CIRCLE_COLORS }
				renderItem={ ({ item }) => {
					let isActive
					if (!modifiedAccountActiveColor.length) isActive = false
					else isActive = item[0] === modifiedAccountActiveColor[0] && item[1] === modifiedAccountActiveColor[1]
					return <MemoizedColorCircle colors={ item } callback={ modifiedAccountColor } isActive={ isActive } />
				} }
				keyExtractor={ colors => colors[0] + colors[1] }
				style={ styles.modifiedAccountColorListWrapper }
				contentContainerStyle={ styles.modifiedAccountColorList }
				horizontal={ true }
			/>
		</View>
	)
}

export default ModifiedAccountColor