import {NavigateFunction} from "react-router-dom";
import {SET_USER_INFO} from "../constants/userInfo";
import {Dispatch} from "redux";
import {UserInfo} from "../../interfaces/UserInfo";
import {LoginFormData} from "../../interfaces/LoginFormData";

export const registerActionSuccess = (data: UserInfo) => ({
    type: SET_USER_INFO,
    payload: data,
});

export const registerAction = (
    formData: LoginFormData,
    navigate: NavigateFunction
) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch(
                import.meta.env.VITE_DB_BASEURL + "/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            localStorage.setItem("sd_token", data.token);

            dispatch(registerActionSuccess(data));

            navigate("/dashboard");
        } catch (error) {
            if (error instanceof Error) console.error(error.message);
        }
    };
};

export const loginActionSuccess = (data: UserInfo) => ({
    type: SET_USER_INFO,
    payload: data,
});

export const loginAction = (
    formData: LoginFormData,
    navigate: NavigateFunction
) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch(
                import.meta.env.VITE_DB_BASEURL + "/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password,
                    }),
                }
            );

            const data = await response.json();

            localStorage.setItem("sd_token", data.token);

            dispatch(loginActionSuccess(data));

            navigate("/dashboard");
        } catch (error) {
            if (error instanceof Error) console.error(error.message);
        }
    };
};

export const getUserFromTokenActionSuccess = (data: UserInfo) => ({
    type: SET_USER_INFO,
    payload: data,
});

export const getUserFromTokenAction = (
    token: string,
    navigate?: NavigateFunction
) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch(
                import.meta.env.VITE_DB_BASEURL + "/auth/jwt/valid-token",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );

            const data = await response.json();

            if (data.message.length > 0 && navigate) {
                navigate("/entrar");
                console.error(data.message);
            }

            dispatch(
                getUserFromTokenActionSuccess({
                    token: data.token,
                    info: data.info,
                })
            );
        } catch (error) {
            if (error instanceof Error) console.error(error);
        }
    };
};
