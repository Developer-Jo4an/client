import React from 'react'
import { FlatList } from 'react-native'

import Actual from '../actual/Actual'
import Total from '../total/Total'
import Header from '../header/Header'
import Accounts from '../accounts/Accounts'
import { MemoizedModalWindowBottom } from '../../../components/modal-windows/modal-window-bottom/ModalWindowBottom'
import NewAccount from '../modal-windows/new-account-modal-window/NewAccount'
import ModifiedAccount from '../modal-windows/modified-account-modal-window/ModifiedAccount'

import { useAppContext } from '../../../../AppProvider'
import { useHomeContext } from './HomeProvider'

import { styles } from './styles'

const HomeWrapper = () => {

	const { user } = useAppContext()
	const [userState, _] = user
	const { avatar, accounts, nickname, subscriptionLevel } = userState

	const { newAccountVisible, modifiedAccountVisible, modifiedAccount } = useHomeContext()

	const homeComponents = [
		{ key: 'Actual', component: <Actual /> },
		{ key: 'Total', component: <Total accounts={ accounts } /> },
		{ key: 'Accounts', component: <Accounts accounts={ accounts } modifiedAccountVisible={ modifiedAccountVisible } modifiedAccount={ modifiedAccount }/> },
	]

	return (
		<>
			<FlatList
				data={ homeComponents }
				renderItem={ ({ item }) => item.component }
				keyExtractor={ item => item.key }
				ListHeaderComponent={ <Header avatar={ avatar } nickname={ nickname } subscriptionLevel={ subscriptionLevel } /> }
				stickyHeaderIndices={ [0] }
				nestedScrollEnabled={ true }
				showsVerticalScrollIndicator={ false }
				style={ styles.homeScreenContainer }
				contentContainerStyle={ styles.homeScreenContent }
			/>
			<MemoizedModalWindowBottom visible={ newAccountVisible } contentHeight={ 350 }><NewAccount /></MemoizedModalWindowBottom>
			<MemoizedModalWindowBottom visible={ modifiedAccountVisible } contentHeight={ 350 }><ModifiedAccount /></MemoizedModalWindowBottom>
		</>
	)
}

export default HomeWrapper