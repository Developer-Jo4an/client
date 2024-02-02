import React, { memo, useEffect, useRef } from 'react'
import { Pressable, View, Animated } from 'react-native'
import { Shadow } from 'react-native-shadow-2'

import { SHADOW } from '../../../../../../constants/styleConstants'

import { styles } from './styles'

const ModifiedAccountType = memo(({ modifiedAccount }) => {

	const [modifiedAccountState, modifiedAccountDispatch] = modifiedAccount

	const animation = useRef(new Animated.Value(+(modifiedAccountState.accountType !== 'cash'))).current

	useEffect(() => {
		Animated.timing(animation, {
			toValue: +(modifiedAccountState.accountType !== 'cash'),
			duration: 200,
			useNativeDriver: false
		}).start()
	}, [modifiedAccountState.accountType])

	return (
		<View style={ styles.modifiedAccountTypeContainer }>
			<Shadow distance={ 5 } startColor={ SHADOW }>
				<View style={ styles.modifiedAccountTypeWrapper }>
					<Pressable style={{ zIndex: 1 }} onPress={ () => modifiedAccountDispatch({ type: 'set-type', accountType: 'cash' }) }>
						<View style={ styles.modifiedAccountTypeToggle }><Animated.Text style={ styles.modifiedAccountTypeTextCash(animation) }>CASH</Animated.Text></View>
					</Pressable>
					<Pressable style={{ zIndex: 1 }} onPress={ () => modifiedAccountDispatch({ type: 'set-type', accountType: 'card' }) }>
						<View style={ styles.modifiedAccountTypeToggle }><Animated.Text style={ styles.modifiedAccountTypeTextCard(animation) }>CARD</Animated.Text></View>
					</Pressable>
					<Animated.View style={ styles.modifiedAccountFocus(animation) }></Animated.View>
				</View>
			</Shadow>
		</View>
	)
}, (prev, next) => prev.modifiedAccount[0].accountType === next.modifiedAccount[0].accountType)

export default ModifiedAccountType