import React from 'react'

import HomeProvider from './HomeProvider'
import HomeWrapper from './HomeWrapper'

const Home = () => {
	return (
		<HomeProvider>
			<HomeWrapper />
		</HomeProvider>
	)
}

export default Home