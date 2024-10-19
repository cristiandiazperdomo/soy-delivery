import React from "react";
import {DashboardSideBar} from "../../components/DashboardSideBar/DashboardSideBar";
import {CardOrder} from "../../components/CardOrder/CardOrder";
import {UserDropdown} from "../../components/UserDropdown/UserDropdown";

export const AdminDelivery = () => {
    return (
        <div className="flex font-semibold text-gray-700">
            <DashboardSideBar />
            <div className="flex flex-col w-full pl-[257px]">
                <header className="min-w-full max-w-full h-[100px]">
                    <div className="flex justify-between items-center px-3 h-full border-b-2 border-gray-100">
                        <div>
                            <form className="flex items-center max-w-lg mx-auto">
                                <label
                                    htmlFor="voice-search"
                                    className="sr-only"
                                >
                                    Buscar
                                </label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg
                                            className="w-4 h-4 text-gray-300"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        id="voice-search"
                                        className="border-2 border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary outline-none block w-full ps-10 p-2.5"
                                        placeholder="#7X42VC"
                                        required
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400 ">
                            <div className="hover:text-gray-800">
                                <UserDropdown />
                            </div>
                            <button className="flex py-2 px-3 border-2 border-gray-100 rounded-lg text-gray-400 hover:text-gray-700 hover:border-gray-700">
                                <div className="pr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-door-enter text-gray-"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M13 12v.01" />
                                        <path d="M3 21h18" />
                                        <path d="M5 21v-16a2 2 0 0 1 2 -2h6m4 10.5v7.5" />
                                        <path d="M21 7h-7m3 -3l-3 3l3 3" />
                                    </svg>
                                </div>
                                <p>Cerrar Sesión</p>
                            </button>
                        </div>
                    </div>
                </header>
                <div className="h-screen w-full space-y-8 px-4 mb-96">
                    <div className="pt-10">
                        <h2 className="text-3xl">Estados de Entregas</h2>
                        <div className="flex items-center text-gray-400 mt-2">
                            <p>Inicio</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right w-4 h-4"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M9 6l6 6l-6 6" />
                            </svg>
                            <p>Estados de Entregas</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-x-4">
                        {[1, 2, 3, 4].map(() => (
                            <div className="bg-primary/[5%] pt-8 pb-12 px-4 border border-primary/30 rounded-lg">
                                <header>
                                    <p className="text-gray-400">
                                        Entregas hoy
                                    </p>
                                </header>
                                <div>
                                    <p className="text-3xl">127 Entregas</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="">
                        <h2 className="text-3xl mb-8">Reporte de Entregas</h2>
                        <ul className="flex mb-4 border-b border-gray-200">
                            {[
                                "Todas las entregas",
                                "Entrega en progreso",
                                "Exitosa",
                                "Entrega en espera",
                                "Entrega cancelada",
                                "Reembolso / Reportado",
                            ].map((text) => (
                                <p
                                    className={`${
                                        text === "Todas las entregas"
                                            ? "border-b-4 border-primary"
                                            : "hover:text-gray-400 cursor-pointer"
                                    } px-6 pb-4`}
                                >
                                    {text}
                                </p>
                            ))}
                        </ul>
                        <div className="grid grid-cols-3 gap-8 mt-8">
                            <CardOrder />
                            <CardOrder />
                            <CardOrder />
                            <CardOrder />
                            <CardOrder />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
