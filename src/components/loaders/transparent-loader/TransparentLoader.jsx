import React from 'react'
import { ActivityIndicator, View, Modal } from 'react-native'

import { GREEN_COLOR } from '../../../constants/styleConstants'

import { styles } from './styles'

const TransparentLoader = ({ isVisible }) => {

	return (
		<Modal visible={ isVisible } animationType={ 'none' } transparent={ true } statusBarTranslucent={ true }>
			<View style={ styles.loaderWrapper }><ActivityIndicator color={ GREEN_COLOR } /></View>
		</Modal>
    )
}

export default TransparentLoader