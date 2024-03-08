import { View } from 'react-native'

import ApplyBtn from '../../../../../../UI/buttons/apply-btn/ApplyBtn'
import TransparentLoader from '../../../../../../components/loaders/transparent-loader/TransparentLoader'
import DeleteBtn from '../../../../../../UI/buttons/delete-btn/DeleteBtn'

import { styles } from './styles'

const ModifiedAccountButtons = () => {
	return (
		<View style={ styles.modifiedAccountButtons }>
			<View style={ styles.modifiedAccountButtonsWrapper }>
				<DeleteBtn callback={ () => {} } />
				<ApplyBtn callback={ () => {} } />
			</View>
			<TransparentLoader isVisible={ false } />
		</View>
	)
}

export default ModifiedAccountButtons