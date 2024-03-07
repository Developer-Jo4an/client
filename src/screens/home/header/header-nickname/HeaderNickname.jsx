import { Text } from 'react-native'
import { useSelector } from 'react-redux'

import { styles } from './styles'
import { userNicknameSelector } from '../../../../redux/slices/user-slice/userSlice'

const HeaderNickname = () => {

	const nickname = useSelector(userNicknameSelector)

	return <Text style={ styles.headerNicknameValue }>@{ nickname }</Text>
}

export default HeaderNickname