import { FlatList } from 'react-native'
import { PortalHost } from '@gorhom/portal'

import Header from '../header/Header'
import Actual from '../actual/Actual'
import Total from '../total/Total'
import Accounts from '../accounts/Accounts'

import { styles } from './styles'

const Home = () => {

	const homeComponents = [
		{ key: 'Actual', component: <Actual /> },
		{ key: 'Total', component: <Total /> },
		{ key: 'Accounts', component: <Accounts /> }
	]

	return (
		<>
			<FlatList
				data={ homeComponents }
				renderItem={ ({ item }) => item.component }
				keyExtractor={ item => item.key }
				ListHeaderComponent={ <Header /> }
				stickyHeaderIndices={ [0] }
				nestedScrollEnabled={ true }
				showsVerticalScrollIndicator={ false }
				style={ styles.homeScreenContainer }
				contentContainerStyle={ styles.homeScreenContent }
			/>
			<PortalHost name={ 'home-host' } />
		</>
	)
}

export default Home