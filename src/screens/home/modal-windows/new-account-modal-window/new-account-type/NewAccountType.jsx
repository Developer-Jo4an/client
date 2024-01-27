import React, { memo, useEffect, useRef } from 'react'
import { Pressable, View, Animated } from 'react-native'
import { Shadow } from 'react-native-shadow-2'

import { SHADOW } from '../../../../../constants/styleConstants'

import { styles } from './styles'

const NewAccountType = memo(({ newAccount }) => {

	const [newAccountState, newAccountDispatch] = newAccount

	const animation = useRef(new Animated.Value(+(newAccountState.accountType !== 'cash'))).current

	useEffect(() => {
		Animated.timing(animation, {
			toValue: +(newAccountState.accountType !== 'cash'),
			duration: 200,
			useNativeDriver: false
		}).start()
	}, [newAccountState.accountType])

	return (
		<View style={ styles.newAccountTypeContainer }>
			<Shadow distance={ 5 } startColor={ SHADOW }>
				<View style={ styles.newAccountTypeWrapper }>
					<Pressable style={{ zIndex: 1 }} onPress={ () => newAccountDispatch({ type: 'set-type', accountType: 'cash' }) }>
						<View style={ styles.newAccountTypeToggle }><Animated.Text style={ styles.newAccountTypeTextCash(animation) }>CASH</Animated.Text></View>
					</Pressable>
					<Pressable style={{ zIndex: 1 }} onPress={ () => newAccountDispatch({ type: 'set-type', accountType: 'card' }) }>
						<View style={ styles.newAccountTypeToggle }><Animated.Text style={ styles.newAccountTypeTextCard(animation) }>CARD</Animated.Text></View>
					</Pressable>
					<Animated.View style={ styles.newAccountFocus(animation) }></Animated.View>
				</View>
			</Shadow>
		</View>
	)
}, (prev, next) => prev.newAccount[0].accountType === next.newAccount[0].accountType)

export default NewAccountType