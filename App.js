import { SafeAreaView, StatusBar } from 'react-native'
import Home from './src/screens/home/general/Home'
import AppProvider from './AppProvider'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()

export default function App() {
	return (
		<AppProvider>
			<SafeAreaView style={{ flexGrow: 1 }}>
				<NavigationContainer>
					<Tab.Navigator>
						<Tab.Screen name={'Home'} component={ Home } options={{ headerShown: false }} />
					</Tab.Navigator>
				</NavigationContainer>
				<StatusBar translucent={ true } barStyle={ 'dark-content'} backgroundColor={ 'transparent' }/>
			</SafeAreaView>
		</AppProvider>
	)
}

