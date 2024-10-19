import {NavigateFunction} from "react-router-dom";
import {LoginFormData} from "../../pages/Login/Login";
import {SET_USER_INFO} from "../constants/userInfo";
import {UserInfo} from "../reducers/userInfo";

export const registerActionSuccess = (data: UserInfo) => ({
    type: SET_USER_INFO,
    payload: data,
});

export const registerAction = (formData: any, navigate: NavigateFunction) => {
    return async (dispatch: any) => {
        const response = await fetch(
            "http://localhost:3000/api/auth/register",
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

        navigate("/");
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
    return async (dispatch: any) => {
        try {
            const response = await fetch(
                "http://localhost:3000/api/auth/login",
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

            dispatch(loginActionSuccess(data));

            localStorage.setItem("sd_token", data.token);

            navigate("/");
        } catch (error) {
            if (error instanceof Error) console.error(error.message);
        }
    };
};

export const getUserFromTokenActionSuccess = (data: UserInfo) => ({
    type: SET_USER_INFO,
    payload: data,
});

export const getUserFromTokenAction = (token: string) => {
    return async (dispatch: any) => {
        try {
            const response = await fetch(
                "http://localhost:3000/api/auth/jwt/valid-token",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );

            const data = await response.json();

            dispatch(
                getUserFromTokenActionSuccess({
                    token: data.token,
                    info: data.info,
                })
            );
        } catch (error) {
            if (error instanceof Error) console.log(error);
        }
    };
};
