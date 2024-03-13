import { memo } from 'react'
import { FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { userAccountsSelector } from '../../../../redux/slices/user-slice/userSlice'
import { modifiedAccountModalAction, userModifiedAccountModalSelector } from '../../../../redux/slices/user-slice/sub-modified-account-slice/subModifiedAccountExports'
import { modifiedAccountSetAccount } from '../../../../redux/slices/modified-account-slice/modifiedAccountSlice'

import { MemoizedAccount } from '../../../../components/account/Account'
import ModalWindowBottom from '../../../../components/modal-windows/modal-window-bottom/ModalWindowBottom'
import ModifiedAccountModalWindow from '../modal-windows/modified-account-modal-window/ModifiedAccountModalWindow'

import { styles } from './styles'

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
				contentHeight={ 200 }
			><ModifiedAccountModalWindow />
			</ModalWindowBottom>
		</View>
	)
})

export default AccountsList