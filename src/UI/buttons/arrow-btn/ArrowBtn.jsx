import { memo } from 'react'
import { Pressable, View } from 'react-native'

import { ChevronLeft } from 'lucide-react-native'

import { OPACITY_BACKGROUND } from '../../../constants/styleConstants'

import { styles } from './styles'

const ArrowBtn = ({ direction, callback, size, color }) => {
	return (
		<View style={ styles.arrowBtn }>
			<Pressable style={ styles.arrowBtnDirection(direction) } android_ripple={{ color: OPACITY_BACKGROUND }} onPress={ callback }>
				<ChevronLeft size={ size } color={ color } />
			</Pressable>
		</View>
	)
}

export const MemoizedArrowBtn = memo(ArrowBtn, () => true)

export default ArrowBtn