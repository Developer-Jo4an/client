import { FlatList } from 'react-native'
import { PortalHost } from "@gorhom/portal"

import { useFilteredTransactions } from '../../../hooks/useFilteredTransactions'

import Filter from '../../../components/filter/general/Filter'
import Total from '../total/Total'
import TransactionsList from '../transactions-list/TransactionsList'
import NewTransactionButton from '../new-transaction/new-transaction-button/NewTransactionButton'

import { styles } from './styles'

const Transactions = () => {

    const transactionsComponents = [
	    { key: 'Total', component: <Total /> },
	    { key: 'TransactionsList', component: <TransactionsList />  },
    ]

	return (
        <>
            <FlatList
                data={ transactionsComponents }
                renderItem={ ({ item }) => item.component }
                keyExtractor={ item => item.key }
                ListHeaderComponent={ <Filter /> }
                stickyHeaderIndices={ [0] }
                nestedScrollEnabled={ true }
                showsVerticalScrollIndicator={ false }
                style={ styles.transactionsScreenContainer }
                contentContainerStyle={ styles.transactionsScreenContent }
            />
	        <NewTransactionButton />
            <PortalHost name={ 'transactions-host' } />
        </>
    )
}

export default Transactions