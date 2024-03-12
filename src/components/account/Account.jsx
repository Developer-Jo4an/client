import { memo } from 'react'
import { Pressable, View, Text } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { LinearGradient } from 'expo-linear-gradient'

import { NO_CLICK_COLOR, OPACITY_BACKGROUND } from '../../constants/styleConstants'

import { styles } from './styles'

const Account = ({ account, callback, styleProps }) => {

	const { accountName, accountType, accountSignColor, count } = account

	return (
		<View style={{ ...styles.account(callback), ...styleProps }}>
			<Pressable onPress={ callback ? callback : () => {} } android_ripple={{ color: callback ? OPACITY_BACKGROUND : NO_CLICK_COLOR }}>
				<View style={ styles.accountWrapper }>
					<View style={ styles.accountInfoLeftPart }>
						<View style={ styles.accountSignWrapper }>
							<LinearGradient colors={ accountSignColor } start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 1 }}>
								<View style={ styles.accountSign }>
									<FontAwesome name={ accountType === 'cash' ? 'money' : 'credit-card-alt' } color={ '#fff' } size={ 16 } />
								</View>
							</LinearGradient>
						</View>
						<Text style={ styles.accountName }>{ accountName }</Text>
					</View>
					<Text style={ styles.accountCount(count) }>{ count } $</Text>
				</View>
			</Pressable>
		</View>
	)
}

const MemoizedAccount = memo(Account, (prev, next) => {
	return (
		prev.account._id === next.account._id &&
		prev.account.accountName === next.account.accountName &&
		prev.account.count === next.account.count &&
		prev.account.accountType === next.account.accountType &&
		prev.account.accountSignColor[0] === next.account.accountSignColor[0] &&
		prev.account.accountSignColor[1] === next.account.accountSignColor[1]
	)
})

export { MemoizedAccount }

export default Account