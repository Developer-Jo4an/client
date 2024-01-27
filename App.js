import { SafeAreaView, StatusBar } from 'react-native'
import Home from './src/screens/home/general/Home'
import AppProvider from './AppProvider'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<AppProvider>
			<SafeAreaView style={{ flexGrow: 1}}>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name={'Home'} component={ Home } options={{ headerShown: false }} />
					</Stack.Navigator>
				</NavigationContainer>
				<StatusBar translucent={ true } barStyle={ 'dark-content'} backgroundColor={ 'transparent' }/>
			</SafeAreaView>
		</AppProvider>
	)
}

