import React from 'react'

import Filter from '../../components/filter/Filter'

import { useAppContext } from '../../../AppProvider'
import { FlatList, View } from 'react-native'

import { styles } from './styles'

const TransactionsWrapper = () => {
	const { user } = useAppContext()
	const [userState, _] = user
	const { avatar, accounts, nickname, subscriptionLevel } = userState

	const transactionsComponents = [
		{ key: 'first', component: <View></View> }
	]

	return (
		<>
			<FlatList
				data={ transactionsComponents }
				renderItem={ ({ item }) => item.component }
				keyExtractor={ item => item.key }
				ListHeaderComponent={ () => <Filter /> }
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