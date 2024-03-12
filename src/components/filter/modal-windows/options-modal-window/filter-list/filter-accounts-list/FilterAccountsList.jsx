import { useDispatch, useSelector } from 'react-redux'
import { View } from 'react-native'

import { userAccountsSelector } from '../../../../../../redux/slices/user-slice/userSlice'
import { filterAccountsSelector, toggleAccountAction } from '../../../../../../redux/slices/filter-slice/filterSlice'

import FilterAccount from './filter-account/FilterAccount'
import FilterListHeader from '../filter-list-components/filter-list-header/FilterListHeader'

import { styles } from './styles'

const FilterAccountsList = () => {
	const dispatch = useDispatch()

	const userAccounts = useSelector(userAccountsSelector)
	const filterAccounts = useSelector(filterAccountsSelector)

	const toggleFilterAccount = id => dispatch(toggleAccountAction(id))

	return (
		<View style={ styles.filterAccountsList }>
			<FilterListHeader header={ 'Accounts' } />
			{ userAccounts.map(account => {
				const isSelect = filterAccounts.includes(account._id)
				return <FilterAccount key={ account._id } account={ account } isSelect={ isSelect } callback={ toggleFilterAccount } />
			}) }
		</View>
	)
}

export default FilterAccountsList