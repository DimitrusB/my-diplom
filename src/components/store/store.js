import { configureStore } from "@reduxjs/toolkit";
import adsReducer from "./reducers/reducers";

export const store = configureStore({
    reducer: {
        adsReducer: adsReducer,
    },
})