import React from 'react'

import AnalyticsProvider from './AnalyticsProvider'
import AnalyticsWrapper from './AnalyticsWrapper'

const Analytics = () => {
	return (
		<AnalyticsProvider>
			<AnalyticsWrapper />
		</AnalyticsProvider>
	)
}

export default Analytics