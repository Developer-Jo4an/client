import React, { useContext, useEffect, useReducer, useState } from 'react'

import OpaqueLoader from './src/components/loaders/opaque-loader/OpaqueLoader'
import Error from './src/screens/error/general/Error'

import { useRequest } from './src/hooks/useRequest'
import { RequestService } from './src/service/RequestService'

const AppContext = React.createContext()
export const useAppContext = () => useContext(AppContext)

const userReducer = (state, action) => {
	switch (action.type) {
		case 'set' : return action.user
		case 'set-accounts' : return { ...state, accounts: action.accounts }
		default : return state
	}
}

const AppProvider = ({ children }) => {

	const [userState, userDispatch] = useReducer(userReducer, {})

	const [getUserInfoRequest, load, error] = useRequest(async () => {
		const userInfo = await RequestService.getUserInfo()  // all info about user { status: (false / true), (message: 'Error' / userInfo: {...} }

		if (!userInfo.status) throw new Error(userInfo.message)
		else userDispatch({ type: 'set', user: userInfo.userInfo })
	}, () => {}, true)

	useEffect(() => {
		const request = async () => await getUserInfoRequest()
		request()
	}, [])

	if (load) return <OpaqueLoader />
	if (error) return <Error error={ error } reloadFunction={ getUserInfoRequest } />

	return (
		<AppContext.Provider value={{
			user: [userState, userDispatch]
		}}>{ children }</AppContext.Provider>
	)
}

export default AppProvider