import React from 'react'
import { FlatList, View } from 'react-native'
import { PortalHost } from '@gorhom/portal'
import Filter from '../../../components/filter/Filter'
import AddTransactionsBtn from '../add-transactions-btn/AddTransactionsBtn'

import { useAppContext } from '../../../../AppProvider'

import { styles } from './styles'

const TransactionsWrapper = () => {
	const { filterDateVisible, filterDate } = useAppContext()

	const transactionsComponents = [
		{ key: 'Add-transaction-btn', component: <AddTransactionsBtn /> },
	]

	return (
		<PortalHost name={'transactions-page'}>
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
		</PortalHost>
	)
}

export default TransactionsWrapper