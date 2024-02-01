import React from 'react'

import { useAppContext } from '../../../../AppProvider'
import { FlatList, View } from 'react-native'

import { styles } from './styles'

const AnalyticsWrapper = () => {

	const { user } = useAppContext()
	const [userState, _] = user
	const { avatar, accounts, nickname, subscriptionLevel } = userState

	const analyticComponents = [
		{ key: '1', component: <View></View> }
	]

	return (
		<>
			<FlatList
				data={ analyticComponents }
				renderItem={ ({ item }) => item.component }
				keyExtractor={ item => item.key }
				stickyHeaderIndices={ [0] }
				nestedScrollEnabled={ true }
				showsVerticalScrollIndicator={ false }
				style={ styles.analyticsScreenContainer }
				contentContainerStyle={ styles.analyticsScreenContent }
			/>
		</>
	)
}

export default AnalyticsWrapper