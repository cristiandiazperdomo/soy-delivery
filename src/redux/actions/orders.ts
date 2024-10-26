import {Dispatch} from "redux";
import {SET_ORDERS} from "../constants/orders";
import {Order} from "../../interfaces/Order";
import {NavigateFunction} from "react-router-dom";

export const getOrdersSuccess = (data: Order[]) => ({
    type: SET_ORDERS,
    payload: data,
});

export const getOrders = (status: string, token: string) => {
    return async (dispatch: Dispatch) => {
        const baseUrl = import.meta.env.VITE_DB_BASEURL + "/orders";
        const url = status === "all" ? baseUrl : baseUrl + "/status/" + status;

        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            });
            const data = await response.json();

            dispatch(getOrdersSuccess(data));
        } catch (error) {
            if (error instanceof Error) console.error(error.message);
        }
    };
};
