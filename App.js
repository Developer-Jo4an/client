import { SafeAreaView, StatusBar } from 'react-native'
import Home from './src/screens/home/general/Home'
import AppProvider from './AppProvider'
import Navigation from './src/components/navigation/Navigation'
import Analytics from './src/screens/analytics/general/Analytics'
import Transactions from './src/screens/transactions/Transactions'
import { PortalProvider } from '@gorhom/portal'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

export default function App() {

	return (
		<AppProvider>
			<PortalProvider >
				<SafeAreaView style={{ flex: 1 }}>
					<NavigationContainer>
							<Tab.Navigator tabBar={ props => <Navigation {...props} /> }>
								<Tab.Screen name={ 'Home' } component={ Home } options={{ headerShown: false }} />
								<Tab.Screen name={ 'Analytics' } component={ Analytics } options={{ headerShown: false }} />
								<Tab.Screen name={ 'Transactions' } component={ Transactions } options={{ headerShown: false }} />
							</Tab.Navigator>
					</NavigationContainer>
					<StatusBar translucent={ true } barStyle={ 'dark-content'} backgroundColor={ 'transparent' }/>
				</SafeAreaView>
			</PortalProvider>
		</AppProvider>
	)
}

