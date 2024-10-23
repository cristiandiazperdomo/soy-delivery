import {ACTIVE_LOADER, DESACTIVE_LOADER} from "../constants/loader";

const initialState = false;

export const loaderReducer = (
    state: boolean = initialState,
    action: {type: string}
) => {
    switch (action.type) {
        case ACTIVE_LOADER: {
            return true;
        }
        case DESACTIVE_LOADER: {
            return false;
        }
        default: {
            return state;
        }
    }
};
