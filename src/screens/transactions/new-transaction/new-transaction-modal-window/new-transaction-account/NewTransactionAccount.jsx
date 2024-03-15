import { memo, useEffect } from 'react'
import { Pressable, View, Animated } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { useAnimation } from '../../../../../hooks/useAnimation'

import { OPACITY_BACKGROUND } from '../../../../../constants/styleConstants'
import { Banknote, CreditCard } from 'lucide-react-native'

import { styles } from './styles'

const NewTransactionAccount = memo(({ account, isSelect, callback }) => {

	const { _id, accountName, accountSignColor, accountType, count } = account

	const [animation, animationFunc] = useAnimation(isSelect)
	useEffect(() => animationFunc(200), [isSelect])

	return (
		<View style={ styles.newTransactionAccountComponent }>
			<LinearGradient colors={ isSelect ? accountSignColor : [OPACITY_BACKGROUND, OPACITY_BACKGROUND] } start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 1 }}>
				<Pressable
					style={ styles.newTransactionAccountComponentBtn }
					android_ripple={{ color: OPACITY_BACKGROUND }}
					onPress={ () => callback(_id) }
				>
					<Animated.View style={ styles.newTransactionAccountComponentSignContainer(animation) }>
						<LinearGradient colors={ isSelect ? [OPACITY_BACKGROUND, OPACITY_BACKGROUND] : accountSignColor } start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 1 }}>
							<View style={ styles.newTransactionAccountComponentSignWrapper }>
								{ accountType === 'cash' ? <Banknote size={ 16 } color={ '#fff' } /> : <CreditCard size={ 16 } color={ '#fff' } /> }
							</View>
						</LinearGradient>
					</Animated.View>
					<View style={ styles.newTransactionAccountComponentInfo }>
						<Animated.Text style={ styles.newTransactionAccountComponentName(animation) }>{ accountName }</Animated.Text>
						<Animated.Text style={ styles.newTransactionAccountComponentCount(animation) }>{ count } $</Animated.Text>
					</View>
				</Pressable>
			</LinearGradient>
		</View>
	)
}, (prev, next) => JSON.stringify(prev.account) === JSON.stringify(next.account) && prev.isSelect === next.isSelect)

export default NewTransactionAccount