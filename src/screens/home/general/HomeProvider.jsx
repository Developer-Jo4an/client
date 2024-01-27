import React, { useContext, useReducer, useRef, useState } from 'react'

import { DARK_GREEN_COLOR, GREEN_COLOR } from '../../../constants/styleConstants'

const HomeContext = React.createContext()
export const useHomeContext = () => useContext(HomeContext)

const defaultNewAccount = {
	accountName: '',
	count: 0,
	accountType: 'card',
	accountSignColor: [GREEN_COLOR, DARK_GREEN_COLOR]
}

const defaultModifiedAccount = {
	_id: 'none',
	accountName: '',
	count: 0,
	accountType: 'card',
	accountSignColor: [GREEN_COLOR, DARK_GREEN_COLOR]
}

const newAccountReducer = (state, action) => {
	switch (action.type) {
		case 'set-name' : return { ...state, accountName: action.accountName }
		case 'set-count' : return isNaN(+action.count) ? { ...state, count: 0 } : { ...state, count: +action.count }
		case 'set-type' : return { ...state, accountType: action.accountType }
		case 'set-color' : return { ...state, accountSignColor: action.accountSignColor }
		case 'reset' : return defaultNewAccount
		default: return state
	}
}

const modifiedAccountReducer = (state, action) => {
	switch (action.type) {
		case 'set-name' : return { ...state, accountName: action.accountName }
		case 'set-count' : return isNaN(+action.count) ? { ...state, count: 0 } : { ...state, count: +action.count }
		case 'set-type' : return { ...state, accountType: action.accountType }
		case 'set-color' : return { ...state, accountSignColor: action.accountSignColor }
		case 'set-account' : return action.account
		case 'reset' : return defaultModifiedAccount
		default : return state
	}
}

const HomeProvider = ({ children }) => {

	const newAccount = useReducer(newAccountReducer, defaultNewAccount)
	const newAccountVisible = useState(false)
	const newAccountNameInput = useRef()
	const newAccountCountInput = useRef()

	const modifiedAccount = useReducer(modifiedAccountReducer, defaultModifiedAccount)
	const modifiedAccountVisible = useState(false)
	const modifiedAccountNameInput = useRef()
	const modifiedAccountCountInput = useRef()

	return (
		<HomeContext.Provider value={{
			newAccount,
			newAccountVisible,
			newAccountNameInput,
			newAccountCountInput,
			modifiedAccount,
			modifiedAccountVisible,
			modifiedAccountNameInput,
			modifiedAccountCountInput
		}}>{ children }</HomeContext.Provider>
	)
}

export default HomeProvider