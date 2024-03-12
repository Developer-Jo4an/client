import React, { memo } from 'react'
import { View } from 'react-native'

import TypeOptions from './type-options/TypeOptions'
import FilterList from './filter-list/FilterList'
import OptionsHeader from './options-header/OptionsHeader'

import { styles } from './styles'

const OptionsModalWindow = memo(() => {

	return (
		<View style={ styles.optionsModalWindowContainer }>
			<OptionsHeader />
			<TypeOptions />
			<FilterList />
		</View>
	)
})

export default OptionsModalWindow