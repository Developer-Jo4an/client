import { useSelector } from 'react-redux'
import { userSubscriptionLevelSelector } from '../../../../redux/slices/user-slice/userSlice'

import { Text, Pressable, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { OPACITY_BACKGROUND } from '../../../../constants/styleConstants'

import { styles } from './styles'

const HeaderSubLvl = () => {

	const subscriptionLevel = useSelector(userSubscriptionLevelSelector)

	return (
		<LinearGradient colors={ styles.subLvlColor(subscriptionLevel) } locations={[0, 1]}>
			<Pressable onPress={ () => {} } android_ripple={{ color: OPACITY_BACKGROUND }}>
				<View style={ styles.headerSubLvlValueWrapper }>
					<Text style={ styles.headerSubLvlValue }>{ subscriptionLevel.toUpperCase() }</Text>
				</View>
			</Pressable>
		</LinearGradient>
	)
}

export default HeaderSubLvl