import React from 'react'
import { FlatList } from 'react-native'
import { PortalHost } from '@gorhom/portal'
import Filter from '../../../components/filter/Filter'
import AddTransactionsBtn from '../add-transactions-btn/AddTransactionsBtn'
import FilterModalWindows from '../../../components/filter/filter-modal-windows/FilterModalWindows'

import { useAppContext } from '../../../../AppProvider'
import { useFilterContext } from '../../../components/filter/filter-provider/FilterProvider'

import { styles } from './styles'
import FilterPeriod from '../../../components/filter/filter-modal-windows/filter-period/FilterPeriod';

const TransactionsWrapper = () => {

	const { filterPeriodVisible, filterPeriod } = useFilterContext()

	const transactionsComponents = [
		{ key: 'Add-transaction-btn', component: <AddTransactionsBtn /> },
		{ key: 'Filter-modal-windows', component: <FilterModalWindows /> }
	]

	return (
		<>
			<FlatList
				data={ transactionsComponents }
				renderItem={ ({ item }) => item.component }
				keyExtractor={ item => item.key }
				ListHeaderComponent={ () => <Filter periodVisible={ filterPeriodVisible } period={ filterPeriod } /> }
				stickyHeaderIndices={ [0] }
				nestedScrollEnabled={ true }
				showsVerticalScrollIndicator={ false }
				style={ styles.transactionsScreenContainer }
				contentContainerStyle={ styles.transactionsScreenContent }
			/>
			<PortalHost name={ 'transactions-host' } />
		</>
	)
}

export default TransactionsWrapper