import {UserInfo} from "../../interfaces/userInfo";
import {GET_USER_INFO, SET_USER_INFO} from "../constants/userInfo";

export const initialState: UserInfo = {
    token: "",
    info: {
        data: {
            email: "",
        },
        iat: 0,
        exp: 0,
    },
};

export const userInfoReducer = (
    state = initialState,
    action: {type: string; payload?: UserInfo | undefined}
): UserInfo => {
    switch (action.type) {
        case GET_USER_INFO: {
            return state;
        }
        case SET_USER_INFO: {
            if (action.payload !== undefined) return action.payload;
            throw new Error(
                "userInfoReducer - User information cannot be saved, payload is not defined."
            );
        }
        default: {
            return state;
        }
    }
};
