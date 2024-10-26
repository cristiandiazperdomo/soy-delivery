import {Order} from "../../interfaces/Order";
import {SET_SEARCH_RESULT} from "../constants/search";

const initialState: Order = {
    id: "",
    productName: "",
    price: 0,
    payMethod: "cash",
    status: "pending",
    address: "",
    customerName: "",
    providerName: "",
    driverName: "",
};

export const searchReducer = (
    state = initialState,
    action: {type: string; payload?: Order | undefined}
) => {
    switch (action.type) {
        case SET_SEARCH_RESULT: {
            if (action.payload) return action.payload;
            throw new Error("searchReducer - Payload is undefined");
        }
        default:
            return state;
    }
};
