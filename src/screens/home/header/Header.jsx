import React from 'react'
import { View, Pressable } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import HeaderAvatar from './header-avatar/HeaderAvatar'
import HeaderNickname from './header-nickname/HeaderNickname'
import HeaderSubLvl from './header-sub-lvl/HeaderSubLvl'

import { styles } from './styles'
import {OPACITY_BACKGROUND} from '../../../constants/styleConstants';

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
							<Pressable onPress={ () => {} } android_ripple={{ color: OPACITY_BACKGROUND}}>
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
								<FontAwesome name={'gear'} size={ 20 } color={ '#000' }/>
							</View>
						</Pressable>
					</View>
					<View style={ styles.headerBtnContainer }>
						<Pressable onPress={ () => {} } android_ripple={{ color: OPACITY_BACKGROUND}}>
							<View style={ styles.headerBtnWrapper }>
								<FontAwesome name={'bell'} size={ 18 } color={ '#000' }/>
							</View>
						</Pressable>
					</View>
				</View>
			</View>
		</View>
	)
}

export default Header