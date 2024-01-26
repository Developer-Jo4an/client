import React from 'react'
import Modal from 'react-native-modal'

const ModalWindowBottom = ({ visible, ...props }) => {

	const [isVisible, setIsVisible] = visible

	return (
		<Modal
			isVisible={ isVisible }
			children={ props.children }
			coverScreen={ true }
			animationIn={ 'fadeIn' }
			animationOut={ 'fadeOut' }
			animationInTiming={ 100 }
			animationOutTiming={ 400 }
			statusBarTranslucent={ true }
			avoidKeyboard={ true }
			useNativeDriver={ true }
			backdropOpacity={ 0.7 }
			onBackdropPress={ () => setIsVisible(false) }
			style={{ margin: 0, padding: 0, justifyContent: 'flex-end', overflow: 'hidden' }}
		/>
	)
}

export default ModalWindowBottom