import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { modifiedAccountAccountSelector } from '../../../../../../redux/slices/modified-account-slice/modifiedAccountSlice'

import Account from '../../../../../../components/account/Account'

import { Shadow } from 'react-native-shadow-2'

import { SHADOW } from '../../../../../../constants/styleConstants'

import { styles } from './styles'

const ModifiedAccountPreview = () => {
	const modifiedAccount = useSelector(modifiedAccountAccountSelector)

	return (
		<View style={ styles.previewAccountContainer }>
			<Shadow style={ styles.previewAccountShadow } distance={ 5 } startColor={ SHADOW }>
				<Account account={ modifiedAccount } callback={ false } />
			</Shadow>
		</View>
	)
}

export default ModifiedAccountPreview