import React from 'react'
import { View, Pressable } from 'react-native'

import HeaderAvatar from './header-avatar/HeaderAvatar'
import HeaderNickname from './header-nickname/HeaderNickname'
import HeaderSubLvl from './header-sub-lvl/HeaderSubLvl'

import { OPACITY_BACKGROUND } from '../../../constants/styleConstants'

import { Settings } from 'lucide-react-native'
import { BellRing } from 'lucide-react-native'

import { styles } from './styles'

const Header = () => {

	return (
		<View style={ styles.headerContainer }>
			<View style={ styles.headerWrapper }>
				<View style={ styles.headerUserInfo }>
					<Pressable onPress={ () => {} }>
						<HeaderAvatar />
					</Pressable>
					<View style={ styles.headerNicknameSubLvlWrapper }>
						<View style={ styles.headerNicknameClickUI }>
							<Pressable onPress={ () => {} } android_ripple={{ color: OPACITY_BACKGROUND }}>
								<View style={ styles.headerNicknameClickUIView }>
									<HeaderNickname /></View>
							</Pressable>
						</View>
						<View style={ styles.headerSubLvlValueContainer }><HeaderSubLvl/></View>
					</View>
				</View>
				<View style={ styles.headerBtns }>
					<View style={ styles.headerBtnContainer }>
						<Pressable onPress={ () => {} } android_ripple={{ color: OPACITY_BACKGROUND }}>
							<View style={ styles.headerBtnWrapper }>
								<Settings size={ 22 } color={ '#000' } />
							</View>
						</Pressable>
					</View>
					<View style={ styles.headerBtnContainer }>
						<Pressable onPress={ () => {} } android_ripple={{ color: OPACITY_BACKGROUND}}>
							<View style={ styles.headerBtnWrapper }>
								<BellRing size={ 22 } color={ '#000' } />
							</View>
						</Pressable>
					</View>
				</View>
			</View>
		</View>
	)
}

export default Header