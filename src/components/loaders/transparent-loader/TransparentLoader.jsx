import React from 'react'
import Modal from 'react-native-modal'
import { ActivityIndicator } from 'react-native'

import { GREEN_COLOR } from '../../../constants/styleConstants'

const TransparentLoader = ({ isVisible }) => {

    return (
        <Modal
            isVisible={ isVisible }
            coverScreen={ true }
            animationInTiming={ 0 }
            animationOutTiming={ 0 }
            statusBarTranslucent={ true }
            useNativeDriver={ true }
            backdropOpacity={ 0.7 }
            style={{ margin: 0, padding: 0, justifyContent: 'center', alignItems: 'center' }}
        ><ActivityIndicator color={ GREEN_COLOR } size={ 'large' } /></Modal>
    )
}

export default TransparentLoader