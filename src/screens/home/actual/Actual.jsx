import { useSelector } from 'react-redux'
import {View, Text, FlatList, Image, Pressable} from 'react-native'

import { userSubscriptionLevelSelector } from '../../../redux/slices/user-slice/userSlice'

import Johan from '../../../images/actual-images/Johan.jpg'
import Ichimaru from '../../../images/actual-images/Ichimaru.jpg'
import Griffit from '../../../images/actual-images/Griffit.jpg'
import Aizen from '../../../images/actual-images/Aizen.jpg'
import Sasuke from '../../../images/actual-images/Sasuke.jpg'
import Di from '../../../images/actual-images/Di.jpg'
import Kuroro from '../../../images/actual-images/Kuroro.jpg'

import { OPACITY_BACKGROUND } from '../../../constants/styleConstants'

import { styles } from './styles'

const Actual = () => {

	const subscriptionLevel = useSelector(userSubscriptionLevelSelector)

	const actualData = [Johan, Ichimaru, Griffit, Aizen, Sasuke, Di, Kuroro]

	return (
		<View style={ styles.actualContainer }>
			<View style={ styles.actualHeader }>
				<Text style={ styles.actualHeaderValue }>Actual</Text>
			</View>
			<FlatList
				data={ actualData }
				renderItem={ ({ item }) => (
					<View style={ styles.actualWrapper(subscriptionLevel) }>
						<Image source={ item } style={ styles.actualImg }/>
						<View style={ styles.actualClickUI }>
							<Pressable onPress={ () => {} } android_ripple={{ color: OPACITY_BACKGROUND}}>
								<View style={ styles.actualClickUIView }></View>
							</Pressable>
						</View>
					</View>
				)}
				keyExtractor={ (_, index) => index.toString() }
				horizontal={ true }
				style={ styles.actualListWrapper }
				contentContainerStyle={ styles.actualList }
			/>
		</View>
	)
}

export default Actual