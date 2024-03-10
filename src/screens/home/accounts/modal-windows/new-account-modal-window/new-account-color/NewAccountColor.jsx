import { memo, useCallback } from 'react'
import { FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { newAccountAccountSignColorSelector, newAccountAddColor } from '../../../../../../redux/slices/new-account-slice/newAccountSlice'

import ColorCircle from '../../../../../../components/color-circle/ColorCircle'

import { CIRCLE_COLORS } from '../../../../../../constants/variableConstants'

import { styles } from './styles'

const MemoizedColorCircle = memo(ColorCircle)

const NewAccountColor = () => {
	const dispatch = useDispatch()

	const newAccountActiveColor = useSelector(newAccountAccountSignColorSelector)

	const newAccountColor = useCallback(color => dispatch(newAccountAddColor(color)), [])

	return (
		<View style={ styles.newAccountColorContainer }>
			<FlatList
				data={ CIRCLE_COLORS }
				renderItem={ ({ item }) => {
					let isActive
					if (!newAccountActiveColor.length) isActive = false
					else isActive = item[0] === newAccountActiveColor[0] && item[1] === newAccountActiveColor[1]
					return <MemoizedColorCircle colors={ item } callback={ newAccountColor } isActive={ isActive } />
				} }
				keyExtractor={ colors => colors[0] + colors[1] }
				style={ styles.newAccountColorListWrapper }
				contentContainerStyle={ styles.newAccountColorList }
				horizontal={ true }
			/>
		</View>
	)
}

export default NewAccountColor