import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addNewTransactionModal, userAddNewTransactionModalSelector } from '../../../../redux/slices/user-slice/sub-new-transaction-slice/subNewTransactionExports'

import FixedAddBtn from '../../../../UI/buttons/fixed-add-btn/fixed-add-btn'
import ModalWindowBottom from '../../../../components/modal-windows/modal-window-bottom/ModalWindowBottom'
import NewTransactionModalWindow from '../new-transaction-modal-window/NewTransactionModalWindow'
import { newTransactionAddDateAction } from '../../../../redux/slices/new-transaction/newTransactionSlice'

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../constants/variableConstants'

import { styles } from './styles'

const NewTransactionButton = () => {
	const dispatch = useDispatch()

	const NewTransactionModalWindowVisible = useSelector(userAddNewTransactionModalSelector)
	const toggleNewTransactionModalWindowVisible = () => dispatch(addNewTransactionModal())

	useEffect(() => { if (NewTransactionModalWindowVisible) { dispatch(newTransactionAddDateAction(new Date())) } }, [NewTransactionModalWindowVisible])

	return (
		<>
			<FixedAddBtn
				callback={ toggleNewTransactionModalWindowVisible }
				position={{ top: SCREEN_HEIGHT - 190, left: SCREEN_WIDTH - 85 }}
				hostName={ 'transactions-host' }
			/>
			<ModalWindowBottom
				visible={ NewTransactionModalWindowVisible }
				hostName={ 'application-host' }
				contentHeight={ 250 }
				closeCallback={ toggleNewTransactionModalWindowVisible }
			><NewTransactionModalWindow />
			</ModalWindowBottom>
		</>
	)
}
export default NewTransactionButton