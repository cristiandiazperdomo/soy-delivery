import React, {ChangeEventHandler, FormEvent, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import packing from "../../assets/packing.mp4";
import {AuthVideoHover} from "../../components/AuthVideoHover/AuthVideoHover";
import {useAppDispatch} from "../../hooks/reduxTypes";
import {loginAction} from "../../redux/actions/userInfo";
import {LoginFormData} from "../../interfaces/LoginFormData";



export const Login = () => {
    const [formData, setFormData] = useState<LoginFormData>({
        email: "",
        password: "",
    });

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const getFormData: ChangeEventHandler<HTMLInputElement> = (e) => {
        const {id, value} = e.target;

        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const login = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginAction(formData, navigate));
    };

    return (
        <section className="flex justify-center lg:justify-start">
            <div className="hidden lg:flex relative">
                <div className="max-h-screen">
                    <video
                        autoPlay
                        muted
                        loop
                        controls={false}
                        className="w-full max-h-screen"
                    >
                        <source src={packing}></source>
                    </video>
                </div>
                <AuthVideoHover />
            </div>
            <div className="flex flex-col items-center justify-center px-2 sm:px-6 xl:px-20 py-8 h-screen lg:py-0 w-full md:w-auto">
                <div className="rounded-lg md:mt-0 xl:p-0 min-w-full md:min-w-[480px]">
                    <div className="p-4 space-y-4 md:space-y-6 xl:p-8">
                        <h1 className="text-2xl font-bold text-orange-950 leading-tight tracking-tight text-gray-900">
                            Entra a SoyDelivery
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={login}
                        >
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm text-gray-900 font-bold"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={getFormData}
                                    className="border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4"
                                    placeholder="nombre@gmail.com"
                                    required={true}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-semibold text-gray-900"
                                >
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={getFormData}
                                    placeholder="••••••••"
                                    className="border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4"
                                    required={true}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="flex 0items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                        />
                                    </div>
                                    <div className="ml-2 sm:ml-3 text-xs sm:text-sm">
                                        <label
                                            htmlFor="remember"
                                            className="text-gray-500"
                                        >
                                            Recuerdame
                                        </label>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="text-xs sm:text-sm font-medium text-primary-600 hover:underline"
                                >
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-4 text-center"
                            >
                                Entrar
                            </button>
                            <p className="text-sm font-light text-gray-500">
                                ¿No tienes una cuenta todavia?{" "}
                                <Link
                                    to="/registrarse"
                                    className="font-medium text-primary-600 hover:underline"
                                >
                                    Registrarse
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
