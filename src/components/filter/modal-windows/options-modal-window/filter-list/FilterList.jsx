import { FlatList } from 'react-native'

import FilterAccountsList from './filter-accounts-list/FilterAccountsList'
import FilterExpenseCategoriesList from './filter-expense-categories-list/FilterExpenseCategoriesList'
import FilterIncomeCategoriesList from './filter-income-categories-list/FilterIncomeCategoriesList'

import { styles } from './styles'

const FilterList = () => {

	const filterList = [
		{ key: 'accountsFilter', component: <FilterAccountsList /> },
		{ key: 'expensesFilter', component: <FilterExpenseCategoriesList /> },
		{ key: 'incomeFilter', component: <FilterIncomeCategoriesList /> }
	]

	return (
		<FlatList
			data={ filterList }
			renderItem={ ({ item }) => item.component }
			keyExtractor={ ({ key }) => key }
			nestedScrollEnabled={ true }
			showsVerticalScrollIndicator={ false }
			contentContainerStyle={ styles.filterListContent }
		/>
	)
}

export default FilterList