import { Pressable, View } from 'react-native'

import { styles } from './styles'

const CloseCurtain = ({ closeCallback }) => {
	return (
		<Pressable style={ styles.closeCurtainWrapper } onPress={ closeCallback }>
			<View style={ styles.closeCurtain }></View>
		</Pressable>
	)
}

export default CloseCurtain