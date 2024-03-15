import { memo } from 'react'
import { Pressable, View, Text } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import { NO_CLICK_COLOR, OPACITY_BACKGROUND } from '../../constants/styleConstants'

import { Banknote } from 'lucide-react-native'
import { CreditCard } from 'lucide-react-native'

import { styles } from './styles'

const Account = ({ account, callback, styleProps }) => {

	const { accountName, accountType, accountSignColor, count } = account

	const accountSign = type => type === 'cash' ? <Banknote size={ 18 } color={ '#fff' } /> : <CreditCard size={ 18 } color={ '#fff' } />

	return (
		<View style={{ ...styles.account(callback), ...styleProps }}>
			<Pressable onPress={ callback ? callback : () => {} } android_ripple={{ color: callback ? OPACITY_BACKGROUND : NO_CLICK_COLOR }}>
				<View style={ styles.accountWrapper }>
					<View style={ styles.accountInfoLeftPart }>
						<View style={ styles.accountSignWrapper }>
							<LinearGradient colors={ accountSignColor } start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 1 }}>
								<View style={ styles.accountSign }>
									{ accountSign(accountType) }
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

const MemoizedAccount = memo(Account, (prev, next) => JSON.stringify(prev.account) === JSON.stringify(next.account))

export { MemoizedAccount }

export default Account