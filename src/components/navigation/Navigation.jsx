import React from 'react'
import { View, Text, Animated, Pressable } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { Shadow } from 'react-native-shadow-2'

import { GREEN_COLOR, SHADOW } from '../../constants/styleConstants'

import { styles } from './styles'


const Navigation = ({ state, descriptors, navigation }) => {

	const activeRouteName = state.routes[state.index].name

	const navLogic = {
		Home: 0,
		Analytics: 1,
		Transactions: 2
	}

	const screenSwitch = route => navigation.navigate(route)

	return (
        <View style={ styles.navigationContainer }>
	        <Shadow distance={ 5 } startColor={ SHADOW }>
		        <View style={ styles.navigationWrapper }>
			        <Pressable onPress={ () => screenSwitch('Home') }>
				        <View style={ styles.navigationItem(activeRouteName, 'Home') }>
					        <FontAwesome name={ 'home' } size={ 22 } color={ activeRouteName === 'Home' ? GREEN_COLOR : '#000'} />
					        <Text style={ styles.navigationItemText(activeRouteName, 'Home') }>Home</Text>
				        </View>
			        </Pressable>
			        <Pressable onPress={ () => screenSwitch('Analytics') }>
				        <View style={ styles.navigationItem(activeRouteName, 'Analytics') }>
					        <FontAwesome name={ 'bar-chart' } size={ 22 } color={ activeRouteName === 'Analytics' ? GREEN_COLOR : '#000'} />
					        <Text style={ styles.navigationItemText(activeRouteName, 'Analytics') }>Analytics</Text>
				        </View>
			        </Pressable>
			        <Pressable onPress={ () => screenSwitch('Transactions') }>
				        <View style={ styles.navigationItem(activeRouteName, 'Transactions') }>
					        <FontAwesome name={ 'bars' } size={ 22 } color={ activeRouteName === 'Transactions' ? GREEN_COLOR : '#000'} />
					        <Text style={ styles.navigationItemText(activeRouteName, 'Transactions') }>Transactions</Text>
				        </View>
			        </Pressable>
		        </View>
	        </Shadow>
        </View>
    )
}

export default Navigation