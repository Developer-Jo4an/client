import { memo } from 'react'
import { Text } from 'react-native'

import moment from 'moment/moment'

import { styles } from '../styles'

const NewTransactionTimeValueText = memo(({ date }) => {
	return <Text style={ styles.newTransactionDateInfo }>{ moment(date).format('HH:mm') }</Text>
}, (prev, next) => moment(prev.date).isSame(moment(next.date)))

export default NewTransactionTimeValueText