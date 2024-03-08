import { useEffect } from 'react'
import { Animated, Pressable, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { Shadow } from 'react-native-shadow-2'
import { useAnimation } from '../../../../../../hooks/useAnimation'
import { modifiedAccountAddTypeAction, modifiedAccountTypeSelector } from '../../../../../../redux/slices/modifiedAccountSlice'

import { SHADOW } from '../../../../../../constants/styleConstants'

import { styles } from './styles'

const ModifiedAccountType = () => {

	const dispatch = useDispatch()
	const modifiedAccountType = useSelector(modifiedAccountTypeSelector)

	const [animation, animationFunc] = useAnimation(+(modifiedAccountType === 'cash'))

	const changeType = newType => dispatch(modifiedAccountAddTypeAction(newType))

	useEffect(() => animationFunc(200), [modifiedAccountType])

	return (
		<View style={ styles.modifiedAccountTypeContainer }>
			<Shadow style={ styles.modifiedAccountTypeShadow } distance={ 5 } startColor={ SHADOW }>
				<View style={ styles.modifiedAccountTypeWrapper}>
					<Pressable style={ styles.modifiedAccountTypeBtn } onPress={ () => changeType('cash') }>
						<Animated.Text style={ styles.modifiedAccountBtnValue(animation, 'cash') }>CASH</Animated.Text>
					</Pressable>
					<Pressable style={ styles.modifiedAccountTypeBtn } onPress={ () => changeType('card') }>
						<Animated.Text style={ styles.modifiedAccountBtnValue(animation, 'card') }>CARD</Animated.Text>
					</Pressable>
					<Animated.View style={ styles.modifiedAccountTypeIndicator(animation) }></Animated.View>
				</View>
			</Shadow>
		</View>
	)
}

export default ModifiedAccountType