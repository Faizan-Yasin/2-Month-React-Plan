import { createSelector } from '@reduxjs/toolkit'

const count = (state) => state.count.value

export const countSelector = createSelector(
    count,
    (count) => count * 2
)