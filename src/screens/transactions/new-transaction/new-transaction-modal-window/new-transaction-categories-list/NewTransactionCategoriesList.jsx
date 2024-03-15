import { memo } from 'react'
import { FlatList, View } from 'react-native'

import NewTransactionCategory from '../new-transaction-category/NewTransactionCategory'

import { newTransactionStyles } from '../new-transaction-styles/newTransactionStyles'

const NewTransactionCategoriesList = memo(({ categories, activeCategory, setActiveCategory, activeSubCategory, setActiveSubCategory }) => {

	const subCategories = categories?.find(category => category._id === activeCategory)?.subCategories

	console.log('render')

	return (
		<View style={ newTransactionStyles.newTransactionListWrapper }>
			<FlatList
				data={ categories }
				renderItem={ ({ item }) => {
					const isSelect = activeCategory === item._id
					return <NewTransactionCategory category={ item } isSelect={ isSelect } callback={ setActiveCategory } />
				}}
				keyExtractor={ category => category._id }
				style={ newTransactionStyles.newTransactionList }
				contentContainerStyle={ newTransactionStyles.newTransactionListContent }
				horizontal={ true }
			/>
			{ subCategories?.length ?
				<NewTransactionCategoriesList
					categories={ subCategories }
					activeCategory={ activeSubCategory }
					setActiveCategory={ setActiveSubCategory }
				/>
				:
				null
			}
		</View>
	)
}, (prev, next) => JSON.stringify(prev.categories) === JSON.stringify(next.categories) && prev.activeCategory === next.activeCategory && prev.activeSubCategory === next.activeSubCategory)

export default NewTransactionCategoriesList