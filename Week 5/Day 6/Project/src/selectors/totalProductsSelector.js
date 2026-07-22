import { createSelector } from "@reduxjs/toolkit";

const selectCartItems = (state) => state.cart.items;

export const selectTotalItems = createSelector(
  [selectCartItems],
  (items) => {
    return items.reduce(
      (total, item) => total + item.qty,
      0
    );
  }
);