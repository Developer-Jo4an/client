import { FlatList, Text } from 'react-native'
import { PortalHost } from "@gorhom/portal"

import { styles } from './styles'
import Filter from '../../../components/filter/general/Filter'

const Transactions = () => {

    const transactionsComponents = []

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
            <PortalHost name={ 'transactions-host' } />
        </>
    )
}

export default Transactions