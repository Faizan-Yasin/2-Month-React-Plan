import { createSelector } from "@reduxjs/toolkit";

const EMPTY_ARRAY = [];

const selectProducts = (state) => state.productApi.queries["getProducts(undefined)"]?.data ?? EMPTY_ARRAY;

const selectCategory = (state) => state.ui.selectedCategory;

const selectSearch = (state) => state.ui.search;

export const selectFilteredProducts = createSelector(
    [selectProducts, selectCategory, selectSearch],
    (products, category, search) => {
        return products.filter((product) => {
            const matchedCategory =
                category === "all" ||
                category === product.category;

            const matchedSearch =
                product.title
                    .toLowerCase()
                    .includes(search.toLowerCase());

            return matchedCategory && matchedSearch;
        });
    }
);