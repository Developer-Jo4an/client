import { memo } from 'react'
import { FlatList, View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import {
	modifiedAccountModalAction,
	userAccountsSelector,
	userModifiedAccountModalSelector
} from '../../../../redux/slices/user-slice/userSlice'

import Account from '../../../../components/account/Account'
import ModalWindowBottom from '../../../../components/modal-windows/modal-window-bottom/ModalWindowBottom'
import ModifiedAccountModalWindow from '../modal-windows/modified-account-modal-window/ModifiedAccountModalWindow'

import { styles } from './styles'
import { modifiedAccountSetAccount } from '../../../../redux/slices/modifiedAccountSlice'

const MemoizedAccount = memo(Account, (prev, next) => {
	return (
		prev.account._id === next.account._id &&
	    prev.account.accountName === next.account.accountName &&
		prev.account.count === next.account.count &&
		prev.account.accountType === next.account.accountType &&
		prev.account.accountSignColor[0] === next.account.accountSignColor[0] &&
		prev.account.accountSignColor[1] === next.account.accountSignColor[1]
	)
})

const AccountsList = memo(() => {
	const dispatch = useDispatch()

	const accounts = useSelector(userAccountsSelector)

	const modifiedAccountModalState = useSelector(userModifiedAccountModalSelector)

	const setModifiedAccount = item => {
		dispatch(modifiedAccountSetAccount(item))
		dispatch(modifiedAccountModalAction())
	}

	return (
		<View style={ styles.accountsListWrapper }>
			<FlatList
				data={ accounts }
				renderItem={ ({ item }) => <MemoizedAccount account={ item } callback={ () => setModifiedAccount(item) } /> }
				keyExtractor={ account => account._id }
				style={ styles.accountsListContainer }
			/>
			<ModalWindowBottom
				hostName={ 'application-host' }
				visible={ modifiedAccountModalState }
				closeCallback={ () => dispatch(modifiedAccountModalAction()) }
				contentHeight={ 400 }
			><ModifiedAccountModalWindow />
			</ModalWindowBottom>
		</View>
	)
})

export default AccountsList