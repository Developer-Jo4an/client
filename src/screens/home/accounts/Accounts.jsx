import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import AddBtn from '../../../UI/buttons/add-btn/AddBtn'
import AccountsList from './accounts-list/AccountsList'
import ModalWindowBottom from '../../../components/modal-windows/modal-window-bottom/ModalWindowBottom'
import NewAccountModalWindow from './modal-windows/new-account-modal-window/NewAccountModalWindow'

import { addNewAccountModal, userAddNewAccountModalSelector } from "../../../redux/slices/user-slice/sub-new-account-slice/subNewAccountExports"

import { styles } from './styles'

const Accounts = () => {
	const dispatch = useDispatch()
	const newAccountModalToggle = useSelector(userAddNewAccountModalSelector)

	return (
		<View style={ styles.accountsContainer }>
			<View style={ styles.accountsHeader }>
				<Text style={ styles.accountsHeaderValue }>Accounts</Text>
				<AddBtn callback={ () => dispatch(addNewAccountModal()) } />
			</View>
			<AccountsList />
			<ModalWindowBottom
				hostName={ 'application-host' }
				visible={ newAccountModalToggle }
				closeCallback={ () => dispatch(addNewAccountModal()) }
				contentHeight={ 400 }
			><NewAccountModalWindow />
			</ModalWindowBottom>
		</View>
	)
}

export default Accounts