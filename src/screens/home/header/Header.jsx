import React, { memo } from 'react'

import { View, Image, Pressable, TouchableNativeFeedback, Text } from 'react-native'
import { Buffer } from 'buffer'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell, faGear } from '@fortawesome/free-solid-svg-icons'

import { styles } from './styles'

const Header = memo(({ avatar, nickname, subscriptionLevel }) => {

	return (
		<View style={ styles.headerContainer }>
			<View style={ styles.headerWrapper }>
				<View style={ styles.headerUserInfo }>
					<Pressable onPress={() => {}}>
						<View style={ styles.headerAvatarWrapper(subscriptionLevel) }>
							<Image
								source={{ uri: `data:image/jpeg;base64,${Buffer.from(avatar).toString('base64')}` }}
								style={ styles.headerAvatar }
							/>
							<View style={ styles.headerAvatarClickUI }>
								<TouchableNativeFeedback><View style={ styles.headerAvatarClickUIView }></View></TouchableNativeFeedback>
							</View>
						</View>
					</Pressable>
					<View style={ styles.headerNicknameSubLvlWrapper }>
						<View style={ styles.headerNicknameClickUI }>
							<TouchableNativeFeedback onPress={() => {}}>
								<View style={ styles.headerNicknameClickUIView }>
									<Text style={ styles.headerNicknameValue }>@{ nickname }</Text>
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={ styles.headerSubLvlValueContainer }>
							<LinearGradient
								colors={ styles.subLvlColor(subscriptionLevel) }
								// start={{ x: 0, y: 0.5 }}
								// end={{ x: 1, y: 1 }}
								locations={[0, 1]}
							>
								<TouchableNativeFeedback onPress={() => {}}>
									<View style={ styles.headerSubLvlValueWrapper }>
										<Text style={ styles.headerSubLvlValue }>{ subscriptionLevel.toUpperCase() }</Text>
									</View>
								</TouchableNativeFeedback>
							</LinearGradient>
						</View>
					</View>
				</View>
				<View style={ styles.headerBtns }>
					<View style={ styles.headerBtnContainer }>
						<TouchableNativeFeedback onPress={() => {}}>
							<View style={ styles.headerBtnWrapper }>
								<FontAwesomeIcon icon={ faGear } size={ 20 } color={ '#000' }/>
							</View>
						</TouchableNativeFeedback>
					</View>
					<View style={ styles.headerBtnContainer }>
						<TouchableNativeFeedback onPress={() => {}}>
							<View style={ styles.headerBtnWrapper }>
								<FontAwesomeIcon icon={ faBell } size={ 20 } color={ '#000' }/>
							</View>
						</TouchableNativeFeedback>
					</View>
				</View>
			</View>
		</View>
	)
}, (prev, next) => {
	return (
		prev.avatar.data.toString() === next.avatar.data.toString() &&
		prev.nickname === next.nickname &&
		prev.subscriptionLevel === next.subscriptionLevel
	)
})

export default Header