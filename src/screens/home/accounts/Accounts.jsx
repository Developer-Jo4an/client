import React from 'react'

import AccountsProvider from './accounts-provider/AccountsProvider'
import AccountsWrapper from './AccountsWrapper'

const Accounts = ({ accounts }) => {
    return (
       <AccountsProvider>
           <AccountsWrapper accounts={ accounts } />
       </AccountsProvider>
    )
}

export default Accounts