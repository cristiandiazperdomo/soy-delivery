import {GET_USER_INFO, SET_USER_INFO} from "../constants/userInfo";

interface Data {
    email: string;
}

interface Info {
    data: Data;
    iat: number;
    exp: number;
}

export interface UserInfo {
    token: string;
    info: Info;
}

const initialState: UserInfo = {
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
    state: any = initialState,
    action: any
): UserInfo => {
    switch (action.type) {
        case GET_USER_INFO: {
            return state;
        }
        case SET_USER_INFO: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};
