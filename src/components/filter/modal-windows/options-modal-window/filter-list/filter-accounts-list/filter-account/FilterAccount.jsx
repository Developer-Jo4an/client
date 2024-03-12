import { Pressable, View } from 'react-native'

import { MemoizedAccount } from '../../../../../../account/Account'
import FilterCheckbox from '../../filter-list-components/filter-checkbox/FilterCheckbox'

import { OPACITY_BACKGROUND } from '../../../../../../../constants/styleConstants'

import { styles } from './styles'

const FilterAccount = ({ account, isSelect, callback }) => {

	return (
		<View style={ styles.filterAccount }>
			<Pressable style={ styles.filterAccountWrapper } onPress={ () => callback(account._id) } android_ripple={{ color: OPACITY_BACKGROUND }}>
				<MemoizedAccount account={ account } callback={ false } styleProps={{ backgroundColor: 'transparent' }} />
				<FilterCheckbox isSelect={ isSelect } />
			</Pressable>
		</View>
	)
}

export default FilterAccount