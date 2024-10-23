import {Dispatch} from "redux";
import {SET_ORDERS} from "../constants/orders";
import {Order} from "../../interfaces/Order";

export const getOrdersSuccess = (data: Order[]) => ({
    type: SET_ORDERS,
    payload: data,
});

export const getOrders = (status: string) => {
    return async (dispatch: Dispatch) => {
        const baseUrl = "http://localhost:3000/api/orders";
        const url = status === "all" ? baseUrl : baseUrl + "/status/" + status;

        try {
            const response = await fetch(url);
            const data = await response.json();

            dispatch(getOrdersSuccess(data));
        } catch (error) {
            if (error instanceof Error) console.error(error.message);
        }
    };
};
