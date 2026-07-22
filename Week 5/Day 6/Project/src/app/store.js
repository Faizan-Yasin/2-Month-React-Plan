import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import uiReducer from "../features/ui/uiSlice";
import cartReducer from "../features/cart/cartSlice";
import { productApi } from "../features/products/productApi";
import storage from "redux-persist/lib/storage";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const persistConfig = {
    key: "root",
    storage: storage.default ?? storage,
    whitelist: ["cart", "ui", "theme"],
};

const rootReducer = combineReducers({
    theme: themeReducer,
    ui: uiReducer,
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
});

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
);

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(productApi.middleware),
});

export const persistor = persistStore(store);