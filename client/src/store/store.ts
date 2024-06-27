import { configureStore } from "@reduxjs/toolkit";
import ReducerCart from "./reducers/ReducerCart"

export const store = configureStore({
    reducer: {
        products: ReducerCart
    }
})