import { createSelector } from '@reduxjs/toolkit'

const users = (state) => state.user

export const filteredUser = createSelector(
    [users],
    (users) => users.find((user) => user.id === 5)
)