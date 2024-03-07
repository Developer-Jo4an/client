import { useEffect } from 'react'
import { Pressable, View, Animated } from 'react-native'
import { Shadow } from 'react-native-shadow-2'
import { useDispatch, useSelector } from 'react-redux'

import { newAccountAccountTypeSelector, newAccountAddType } from '../../../../../../redux/slices/newAccountSlice'
import { useAnimation } from '../../../../../../hooks/useAnimation'

import { SHADOW } from '../../../../../../constants/styleConstants'

import { styles } from './styles'

const NewAccountType = () => {
	const dispatch = useDispatch()
	const newAccountType = useSelector(newAccountAccountTypeSelector)

	const [animation, animationFunc] = useAnimation(+(newAccountType === 'cash'))

	const changeType = newType => dispatch(newAccountAddType(newType))

	useEffect(() => animationFunc(200), [newAccountType])

	return (
		<View style={ styles.newAccountTypeContainer }>
			<Shadow style={ styles.newAccountTypeShadow } distance={ 5 } startColor={ SHADOW }>
				<View style={ styles.newAccountTypeWrapper}>
					<Pressable style={ styles.newAccountTypeBtn } onPress={ () => changeType('cash') }>
						<Animated.Text style={ styles.newAccountBtnValue(animation, 'cash') }>CASH</Animated.Text>
					</Pressable>
					<Pressable style={ styles.newAccountTypeBtn } onPress={ () => changeType('card') }>
						<Animated.Text style={ styles.newAccountBtnValue(animation, 'card') }>CARD</Animated.Text>
					</Pressable>
					<Animated.View style={ styles.newAccountTypeIndicator(animation) }></Animated.View>
				</View>
			</Shadow>
		</View>
	)
}

export default NewAccountType
