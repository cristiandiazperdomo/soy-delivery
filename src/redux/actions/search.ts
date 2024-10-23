import {Dispatch} from "redux";
import {SET_SEARCH_RESULT} from "../constants/search";
import {activeLoader, desactiveLoader} from "./loader";
import {Order} from "../../interfaces/Order";

const findOrderByIdSuccess = (data: Order[]) => ({
    type: SET_SEARCH_RESULT,
    payload: data,
});

export const findOrderById = (
    id: string,
    setShowTrackOrder: (value: boolean) => void
) => {
    return async (dispatch: Dispatch) => {
        dispatch(activeLoader());

        try {
            dispatch(
                findOrderByIdSuccess(
                    await (
                        await fetch("http://localhost:3000/api/orders/" + id)
                    ).json()
                )
            );
            dispatch(desactiveLoader());
            setShowTrackOrder(true);
        } catch (error) {
            if (error instanceof Error) console.error(error.message);
            setShowTrackOrder(false);
            dispatch(desactiveLoader());
        }
    };
};
