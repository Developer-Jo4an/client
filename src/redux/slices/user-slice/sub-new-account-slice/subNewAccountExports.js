import { userSlice } from '../userSlice'

export const {
    userNewAccountIsLoadingSelector,
    userAddNewAccountErrorSelector,
    userAddNewAccountModalSelector,
} = userSlice.selectors

export const {
    addNewAccount,
    addNewAccountModal,
} = userSlice.actions