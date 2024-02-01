import React from 'react'

import { useAppContext } from '../../../AppProvider'
import { FlatList, View } from 'react-native'

import { styles } from './styles'

const TransactionsWrapper = () => {
	const { user } = useAppContext()
	const [userState, _] = user
	const { avatar, accounts, nickname, subscriptionLevel } = userState

	const transactionsComponents = [
		{ key: '1', component: <View></View> }
	]

	return (
		<>
			<FlatList
				data={ transactionsComponents }
				renderItem={ ({ item }) => item.component }
				keyExtractor={ item => item.key }
				stickyHeaderIndices={ [0] }
				nestedScrollEnabled={ true }
				showsVerticalScrollIndicator={ false }
				style={ styles.transactionsScreenContainer }
				contentContainerStyle={ styles.transactionsScreenContent }
			/>
		</>
	)
}

export default TransactionsWrapper