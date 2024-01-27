import React, { memo } from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCreditCard, faMoneyBill } from '@fortawesome/free-solid-svg-icons'

import { styles } from './styles'

const Account = ({ account, callback }) => {

	return (
		<View style={ styles.accountContainer }>
			<TouchableNativeFeedback onPress={ () => callback(account) }>
				<View style={ styles.accountWrapper }>
					<View style={ styles.accountLeftPart }>
						<View style={ styles.accountSignContainer }>
							<LinearGradient colors={ account.accountSignColor } start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 1 }}>
								<View style={ styles.accountSignContainer }>
									<FontAwesomeIcon
										icon={ account.accountType === 'cash' ? faMoneyBill : faCreditCard }
										size={ account.accountType === 'cash' ? 20 : 18 } color={ '#fff' }
									/>
								</View>
							</LinearGradient>
						</View>
						<Text style={ styles.accountNameValue }>{ account.accountName }</Text>
					</View>
					<View style={ styles.accountCountContainer }>
						<Text style={ styles.accountCountValue(account.count) }>{ account.count.toFixed(2) } $</Text>
					</View>
				</View>
			</TouchableNativeFeedback>
		</View>
	)
}

const MemoizedAccount = memo(Account, (prev, next) => {

	const prevAccount = prev.account
	const nextAccount = next.account

	return (
		prevAccount._id === nextAccount._id &&
		prevAccount.accountName === nextAccount.accountName &&
		prevAccount.accountType === nextAccount.accountType &&
		prevAccount.count === nextAccount.count	&&
		prevAccount.accountSignColor[0] === nextAccount.accountSignColor[0] &&
		prevAccount.accountSignColor[1] === nextAccount.accountSignColor[1]
	)
})

export { Account, MemoizedAccount }