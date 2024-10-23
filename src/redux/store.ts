import {configureStore} from "@reduxjs/toolkit";
import {userInfoReducer} from "./reducers/userInfo";
import {orderReducer} from "./reducers/orders";
import {searchReducer} from "./reducers/search";
import {loaderReducer} from "./reducers/loader";

export const store = configureStore({
    reducer: {
        user: userInfoReducer,
        orders: orderReducer,
        search: searchReducer,
        loader: loaderReducer,
    },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
