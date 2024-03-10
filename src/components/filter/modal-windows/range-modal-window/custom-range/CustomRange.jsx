import { Pressable, Text } from 'react-native'

import Fontisto from 'react-native-vector-icons/Fontisto'

import { OPACITY_BACKGROUND } from '../../../../../constants/styleConstants'

import { styles } from './styles'

const CustomRange = () => {

    return (
        <Pressable style={ styles.customRangeWrapper } android_ripple={{ color: OPACITY_BACKGROUND }}>
            <Text style={ styles.customRangeText }>Custom range</Text>
            <Fontisto name={ 'calendar' } size={ 22 } color={ '#000' } />
        </Pressable>
    )
}

export default CustomRange