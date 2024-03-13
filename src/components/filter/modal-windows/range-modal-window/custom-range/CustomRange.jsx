import { Pressable, Text } from 'react-native'

import { OPACITY_BACKGROUND } from '../../../../../constants/styleConstants'

import { CalendarDays } from 'lucide-react-native'

import { styles } from './styles'

const CustomRange = () => {

    return (
        <Pressable style={ styles.customRangeWrapper } android_ripple={{ color: OPACITY_BACKGROUND }}>
            <Text style={ styles.customRangeText }>Custom range</Text>
	        <CalendarDays size={ 22 } color={ '#000' } />
        </Pressable>
    )
}

export default CustomRange