import { useSelector } from 'react-redux'
import { Image, Pressable, View } from 'react-native'
import { Buffer } from 'buffer'

import { userAvatarSelector, userSubscriptionLevelSelector } from '../../../../redux/slices/user-slice/userSlice'

import { OPACITY_BACKGROUND } from '../../../../constants/styleConstants'

import { styles } from './styles'

const HeaderAvatar = () => {

	const avatar = useSelector(userAvatarSelector)
	const subscriptionLevel = useSelector(userSubscriptionLevelSelector)

	return (
		<View style={ styles.headerAvatarWrapper(subscriptionLevel) }>
			<Image
				source={{ uri: `data:image/jpeg;base64,${Buffer.from(avatar).toString('base64')}` }}
				style={ styles.headerAvatar }
			/>
			<View style={ styles.headerAvatarClickUI }>
				<Pressable android_ripple={{ color: OPACITY_BACKGROUND }}><View style={ styles.headerAvatarClickUIView }></View></Pressable>
			</View>
		</View>
	)
}

export default HeaderAvatar