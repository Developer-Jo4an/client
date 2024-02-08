import React from 'react'
import { FlatList } from 'react-native'
import Filter from '../../../components/filter/Filter'
import AddTransactionsBtn from '../add-transactions-btn/AddTransactionsBtn'

import { useAppContext } from '../../../../AppProvider'
import { PortalHost } from '@gorhom/portal'

import { styles } from './styles'
import FilterCalendarModalWindow
	from '../../../components/filter/filter-calendar-modal-window/FilterCalendarModalWindow';

const TransactionsWrapper = () => {

	const { filterDateVisible, filterDate } = useAppContext()

	const transactionsComponents = [
		{ key: 'Add-transaction-btn', component: <AddTransactionsBtn /> },
		{ key: 'Filter-calendar', component: <FilterCalendarModalWindow datepickerVisible={ filterDateVisible } filterDate={ filterDate } /> }
	]

	return (
		<>
			<FlatList
				data={ transactionsComponents }
				renderItem={ ({ item }) => item.component }
				keyExtractor={ item => item.key }
				ListHeaderComponent={ () => <Filter datepickerVisible={ filterDateVisible } filterDate={ filterDate }/> }
				stickyHeaderIndices={ [0] }
				nestedScrollEnabled={ true }
				showsVerticalScrollIndicator={ false }
				style={ styles.transactionsScreenContainer }
				contentContainerStyle={ styles.transactionsScreenContent }
			/>
			<PortalHost name={'transactions-page'} />
		</>

	)
}

export default TransactionsWrapper