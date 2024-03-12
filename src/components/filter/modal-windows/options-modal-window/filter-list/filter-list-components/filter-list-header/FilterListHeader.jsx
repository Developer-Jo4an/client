import React, { memo } from 'react'
import { Text } from 'react-native'

import { styles } from './styles'

const FilterListHeader = memo(({ header }) => {
	return (
		<Text style={ styles.filterListHeader }>{ header }</Text>
	)
})

export default FilterListHeader