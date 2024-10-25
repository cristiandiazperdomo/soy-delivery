import React, {ChangeEventHandler, FormEventHandler, useState} from "react";
import pouring from "../../assets/pouring.mp4";
import {Link, useNavigate} from "react-router-dom";
import {AuthVideoHover} from "../../components/AuthVideoHover/AuthVideoHover";
import {useAppDispatch} from "../../hooks/reduxTypes";
import {registerAction} from "../../redux/actions/userInfo";

interface RegisterFormData {
    name: string;
    email: string;
    role: string;
    password: string;
    confirmPassword: string;
    [key: string]: string;
}

export const SignUp = () => {
    const [formData, setFormData] = useState<RegisterFormData>({
        name: "",
        email: "",
        role: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const getFormData: ChangeEventHandler<
        HTMLInputElement | HTMLSelectElement
    > = (e) => {
        const {id, value} = e.target;

        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const register: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const {confirmPassword, ...rest} = formData;

        dispatch(registerAction(rest, navigate));
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
                        <source src={pouring}></source>
                    </video>
                </div>
                <AuthVideoHover />
            </div>

            <div className="flex flex-col items-center justify-center px-2 sm:px-6 xl:px-20 py-8 h-screen lg:py-0 w-full md:w-auto">
                <div className="rounded-lg md:mt-0 xl:p-0 w-full md:w-[480px]">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900">
                            Entra a SoyDelivery
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={register}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-6 gap-x-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Nombre
                                    </label>
                                    <input
                                        type="name"
                                        name="name"
                                        id="name"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4"
                                        placeholder="Nombre"
                                        onChange={getFormData}
                                        required={true}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="role"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        ¿Cliente o Conductor?
                                    </label>
                                    <select
                                        id="role"
                                        onChange={getFormData}
                                        className="border border-gray-300 bg-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                                    >
                                        <option selected className="p-8">
                                            Elige un rol
                                        </option>
                                        <option value="dealer" className="p-4">
                                            CONDUCTOR
                                        </option>
                                        <option
                                            value="business"
                                            className="p-4"
                                        >
                                            CLIENTE
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Email
                                </label>
                                <input
                                    onChange={getFormData}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4"
                                    placeholder="nombre@gmail.com"
                                    required={true}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Contraseña
                                </label>
                                <input
                                    onChange={getFormData}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4"
                                    required={true}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Confirmar contraseña
                                </label>
                                <input
                                    onChange={getFormData}
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="••••••••"
                                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4"
                                    required={true}
                                />
                            </div>
                            <div className="flex items-center lg:items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded focus:ring-3 focus:ring-primary-300"
                                        required={true}
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        htmlFor="terms"
                                        className="font-light text-gray-500"
                                    >
                                        Acepto los{" "}
                                        <a
                                            className="font-medium text-primary-600 hover:underline"
                                            href="#"
                                        >
                                            Terminos y condiciones
                                        </a>
                                    </label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-4 text-center"
                            >
                                Crear una cuenta
                            </button>
                            <p className="text-sm font-light text-gray-500">
                                ¿Ya tienes una cuenta?{" "}
                                <Link
                                    to="/entrar"
                                    className="font-medium text-primary-600 hover:underline"
                                >
                                    Entrar aquí
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
