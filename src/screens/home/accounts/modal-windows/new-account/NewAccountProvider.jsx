import React, {useContext, useReducer, useState} from 'react'
import { DARK_GREEN_COLOR, GREEN_COLOR } from '../../../../../constants/styleConstants'

const NewAccountContext = React.createContext()
export const useNewAccountContext = () => useContext(NewAccountContext)

const defaultNewAccount = {
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

const NewAccountProvider = ({ children }) => {


	const newAccount = useReducer(newAccountReducer, defaultNewAccount)
	const visible = useState(false)
	return (
		<NewAccountContext.Provider value={{
			newAccount,
			visible
		}}>{ children }</NewAccountContext.Provider>
	)
}

export default NewAccountProvider