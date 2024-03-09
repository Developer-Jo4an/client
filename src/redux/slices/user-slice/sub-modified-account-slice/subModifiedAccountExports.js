import { userSlice } from "../userSlice"

export const {
    userModifiedAccountIsLoadingSelector,
    userModifiedAccountErrorSelector,
    userModifiedAccountModalSelector,
} = userSlice.selectors

export const {
    modifiedAccountAction,
    modifiedAccountModalAction,
} = userSlice.actions