import React from 'react'
import Modal from 'react-native-modal'

const MyModal = ({ visible, ...props}) => {

	const [isVisible, setVisible] = visible

	return (
		<Modal
			isVisible={ true }
			coverScreen={ true }
			animationInTiming={ 0 }
			animationOutTiming={ 0 }
			statusBarTranslucent={ true }
			useNativeDriver={ true }
			backdropOpacity={ 0.7 }
			style={{ margin: 0, padding: 0, justifyContent: 'center', alignItems: 'center' }}
		>{ props.children }</Modal>
	)
}

export default MyModal