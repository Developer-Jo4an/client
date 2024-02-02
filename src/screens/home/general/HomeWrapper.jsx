import React from 'react'
import { FlatList } from 'react-native'
import { PortalProvider } from '@gorhom/portal'

import Actual from '../actual/Actual'
import Total from '../total/Total'
import Header from '../header/Header'
import Accounts from '../accounts/Accounts'

import { useAppContext } from '../../../../AppProvider'

import { styles } from './styles'

const HomeWrapper = () => {

	const { user } = useAppContext()
	const [userState, _] = user
	const { avatar, accounts, nickname, subscriptionLevel } = userState


	const homeComponents = [
		{ key: 'Actual', component: <Actual /> },
		{ key: 'Total', component: <Total accounts={ accounts } /> },
		{ key: 'Accounts', component: <Accounts accounts={ accounts } /> },
	]

	return (
		<FlatList
			data={ homeComponents }
			renderItem={ ({ item }) => item.component }
			keyExtractor={ item => item.key }
			ListHeaderComponent={ () => <Header avatar={ avatar } nickname={ nickname } subscriptionLevel={ subscriptionLevel } /> }
			stickyHeaderIndices={ [0] }
			nestedScrollEnabled={ true }
			showsVerticalScrollIndicator={ false }
			style={ styles.homeScreenContainer }
			contentContainerStyle={ styles.homeScreenContent }
		/>
	)
}

export default HomeWrapper