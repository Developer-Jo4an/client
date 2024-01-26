import React from 'react'
import { ActivityIndicator, View, Text } from 'react-native'

import { GREEN_COLOR } from '../../../constants/styleConstants'
import { styles } from './styles'

const OpaqueLoader = () => {
	return (
		<View style={ styles.opaqueLoaderContainer }>
			<ActivityIndicator color={ GREEN_COLOR }/>
			<Text>Loading...</Text>
		</View>
	)
}

export default OpaqueLoader