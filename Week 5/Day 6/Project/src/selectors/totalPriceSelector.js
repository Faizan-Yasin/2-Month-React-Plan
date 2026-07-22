import { createSelector } from "@reduxjs/toolkit";

const selectCartItems = (state) => state.cart.items;

export const selectTotalPrice = createSelector(
    [selectCartItems],
    (items) => {
        return items.reduce(
            (total, item) => total + item.qty * item.price,
            0
        );
    }
);