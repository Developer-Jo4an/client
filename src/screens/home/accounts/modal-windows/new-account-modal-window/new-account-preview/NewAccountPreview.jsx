import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { Shadow } from 'react-native-shadow-2'
import { newAccountAccountSelector } from '../../../../../../redux/slices/newAccountSlice'

import Account from '../../../../../../components/account/Account'

import { SHADOW } from '../../../../../../constants/styleConstants'

import { styles } from './styles'

const NewAccountPreview = () => {
	const newAccount = useSelector(newAccountAccountSelector)

	return (
		<View style={ styles.previewAccountContainer }>
			<Shadow style={ styles.previewAccountShadow } distance={ 5 } startColor={ SHADOW }>
				<Account account={ newAccount } callback={ false }/>
			</Shadow>
		</View>
	)
}

export default NewAccountPreview