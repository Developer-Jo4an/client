import { Provider } from 'react-redux'
import { store } from './src/redux/store'

import AppProvider from './AppProvider'

export default function App() {
	return (
		<Provider store={ store }>
			<AppProvider/>
		</Provider>
	)
}

