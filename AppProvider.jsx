import { useEffect } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Navigation from './src/components/navigation/Navigation'
import Home from './src/screens/home/general/Home'
import Transactions from "./src/screens/transactions/general/Transactions"
import OpaqueLoader from './src/components/loaders/opaque-loader/OpaqueLoader'
import Error from './src/screens/error/general/Error'

import { PortalHost, PortalProvider } from '@gorhom/portal'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo, userErrorSelector, userIsLoadingSelector } from './src/redux/slices/user-slice/userSlice'

import { USER_ID } from './src/constants/variableConstants'

const Tab = createBottomTabNavigator()

const AppProvider = () => {

	const dispatch = useDispatch()

	const isLoading = useSelector(userIsLoadingSelector)
	const error = useSelector(userErrorSelector)
	const request = () => dispatch(getUserInfo(USER_ID))

	useEffect(() => {
		request()
	}, [])


	if (isLoading) return <OpaqueLoader />
	if (error) return <Error error={ error } reloadFunction={ request } />

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<PortalProvider>
				<NavigationContainer>
					<Tab.Navigator tabBar={ props => <Navigation {...props} /> }>
						<Tab.Screen name={ 'Home' } component={ Home } options={{ headerShown: false }} />
						<Tab.Screen name={ 'Transactions' } component={ Transactions } options={{ headerShown: false }} />
					</Tab.Navigator>
				</NavigationContainer>
				<PortalHost name={ 'application-host' }/>
				<StatusBar translucent={ true } barStyle={ 'dark-content' } backgroundColor={ 'transparent' }/>
			</PortalProvider>
		</SafeAreaView>
	)
}

export default AppProvider