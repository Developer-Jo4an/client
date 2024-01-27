import React, { memo, useState } from 'react'
import { View, Text, FlatList, Image, TouchableNativeFeedback } from 'react-native'

import { styles } from './styles'

import Johan from '../../../images/actual-images/Johan.jpg'
import Ichimaru from '../../../images/actual-images/Ichimaru.jpg'
import Griffit from '../../../images/actual-images/Griffit.jpg'
import Aizen from '../../../images/actual-images/Aizen.jpg'
import Sasuke from '../../../images/actual-images/Sasuke.jpg'
import Di from '../../../images/actual-images/Di.jpg'
import Kuroro from '../../../images/actual-images/Kuroro.jpg'


const Actual = memo(({ subscriptionLevel }) => {

	const actualData = [Johan, Ichimaru, Griffit, Aizen, Sasuke, Di, Kuroro]

	const state = useState(false)


	const actualComponent = img => {
		return (
			<View style={ styles.actualWrapper(subscriptionLevel) }>
				<Image source={ img } style={ styles.actualImg }/>
				<View style={ styles.actualClickUI }>
					<TouchableNativeFeedback onPress={ () => state[1](prev => !prev) }><View style={ styles.actualClickUIView }></View></TouchableNativeFeedback>
				</View>
			</View>
		)
	}

	return (
		<View style={ styles.actualContainer }>
			<View style={ styles.actualHeader }>
				<Text style={ styles.actualHeaderValue }>Actual</Text>
			</View>
			<FlatList
				data={ actualData }
				renderItem={ ({ item }) => actualComponent(item) }
				keyExtractor={ (_, index) => index.toString() }
				horizontal={ true }
				style={ styles.actualListWrapper }
				contentContainerStyle={ styles.actualList }
			/>
		</View>
	)
}, (prev, next) => prev.subscriptionLevel === next.subscriptionLevel)

export default Actual