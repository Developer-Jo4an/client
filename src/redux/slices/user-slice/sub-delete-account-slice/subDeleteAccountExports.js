import { userSlice } from '../userSlice'

export const {
    userDeleteAccountIsLoadingSelector,
    userDeleteAccountErrorSelector
} = userSlice.selectors

export const {
    deleteAccountAction
} = userSlice.actions