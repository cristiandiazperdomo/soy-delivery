import {Order} from "../../interfaces/Order";
import {SET_ORDERS} from "../constants/orders";

const initialState: Order[] = [];

export const orderReducer = (
    state = initialState,
    action: {type: string; payload?: Order[] | undefined}
): Order[] => {
    switch (action.type) {
        case SET_ORDERS: {
            if (action.payload) return action.payload;
            throw new Error("orderReducer - Payload is undefined");
        }
        default: {
            return state;
        }
    }
};
