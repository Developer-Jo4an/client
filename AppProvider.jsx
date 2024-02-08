import React, { useContext, useEffect, useReducer, useState } from 'react'

import OpaqueLoader from './src/components/loaders/opaque-loader/OpaqueLoader'
import Error from './src/screens/error/general/Error'

import { useRequest } from './src/hooks/useRequest'
import { RequestService } from './src/service/RequestService'
import { dateEndOf, dateStartOf, monthPeriod, sixMonthPeriod, weekPeriod } from './src/constants/functionConstants'
import moment from 'moment'

const AppContext = React.createContext()
export const useAppContext = () => useContext(AppContext)

const userReducer = (state, action) => {
	switch (action.type) {
		case 'set' : return action.user
		case 'set-accounts' : return { ...state, accounts: action.accounts }
		default : return state
	}
}

const filterDateReducer = (state, action) => {
	switch (action.type) {
		case 'set-start-date' : return [action.startDate, state[1]]
		case 'set-end-date' : return [state[0], action.endDate]
		case 'set-one-day' : return [dateStartOf(action.date), dateEndOf(action.date)]
		case 'set-today' : return [dateStartOf(new Date()), dateEndOf(new Date())]
		case 'set-week' : return [weekPeriod(new Date()), dateEndOf(new Date())]
		case 'set-month' : return [monthPeriod(new Date()), dateEndOf(new Date())]
		case 'set-six-month' : return [sixMonthPeriod(new Date()), dateEndOf(new Date())]
		case 'set-all-time' : return [moment('1970-01-01'), dateEndOf(new Date())]
	}
}

export const defaultFilterDate = [
	weekPeriod(new Date()),
	dateStartOf(new Date())
]

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

	const filterDate = useReducer(filterDateReducer, defaultFilterDate)
	const filterDateVisible = useState(false)

	if (load) return <OpaqueLoader />
	if (error) return <Error error={ error } reloadFunction={ getUserInfoRequest } />

	return (
		<AppContext.Provider value={{
			user: [userState, userDispatch],
			filterDate,
			filterDateVisible
		}}>{ children }</AppContext.Provider>
	)
}

export default AppProvider