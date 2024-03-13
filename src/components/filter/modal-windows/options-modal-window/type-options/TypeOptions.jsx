import { memo } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

import TypeOptionButton from './type-option-button/TypeOptionButton'

import { filterCategoriesTypeSelector } from '../../../../../redux/slices/filter-slice/filterSlice'

import {
	EXPENSE_LABEL,
	EXPENSE_TYPE,
	INCOME_LABEL,
	INCOME_TYPE,
	TRANSFER_LABEL,
	TRANSFER_TYPE
} from '../../../../../constants/variableConstants'

import { styles } from './styles'

const MemoizedTypeButton = memo(TypeOptionButton, (prev, next) => prev.isActive === next.isActive)

const TypeOptions = () => {
	const filterTypesState = useSelector(filterCategoriesTypeSelector)

	const buttonsArray = [
		{ type: EXPENSE_TYPE, typeLabel: EXPENSE_LABEL },
		{ type: INCOME_TYPE, typeLabel: INCOME_LABEL },
		{ type: TRANSFER_TYPE, typeLabel: TRANSFER_LABEL }
	]

	return (
		<View style={ styles.typeOptions }>
			{ buttonsArray.map(({ type, typeLabel }) => {
				const isActive = filterTypesState.includes(type)
				return <MemoizedTypeButton key={ type } type={ type } typeLabel={ typeLabel } isActive={ isActive } />
			})}
		</View>
	)
}

export default TypeOptions