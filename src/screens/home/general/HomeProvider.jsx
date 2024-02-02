import React, { useContext } from 'react'

const HomeContext = React.createContext()
export const useHomeContext = () => useContext(HomeContext)

const HomeProvider = ({ children }) => {

	return (
		<HomeContext.Provider value={{  }}>{ children }</HomeContext.Provider>
	)
}

export default HomeProvider