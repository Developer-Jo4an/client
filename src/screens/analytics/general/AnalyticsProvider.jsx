import React, { useContext } from 'react'

const AnalyticsContext = React.createContext()
export const useAnalyticsContext = () => useContext(AnalyticsContext)

const AnalyticsProvider = ({ children }) => {
	return (
		<AnalyticsContext.Provider value={{

		}}>{ children }</AnalyticsContext.Provider>
	)
}

export default AnalyticsProvider