import React from "react";

export const HeroSection = () => {
    return (
        <div className="w-full">
            <div className="w-full h-[180px] md:h-[280px] lg:h-[420px] px-2">
                <div className="relative w-full h-full rounded-lg">
                    <div className="text-3xl flex flex-col items-center justify-center absolute top-0 h-full w-full">
                        <div className="text-center space-y-0 sm:space-y-1 xl:space-y-4">
                            <h2 className="hidden md:flex text-2xl sm:text-4xl lg:text-5xl flex flex-col font-bold">
                                <div>
                                    <span className="text-orange-400 lg:text-orange-500">
                                        Rastrea tus envíos
                                    </span>{" "}
                                    y
                                </div>
                                <div>
                                    <span className="text-orange-400 lg:text-orange-500">
                                        {" "}
                                        optimiza la logística
                                    </span>{" "}
                                    de tu empresa
                                </div>
                            </h2>
                            <div className="w-full flex flex-col items-center space-y-4 xl:space-y-6">
                                <p className="flex text-sm text-gray-800 md:text-white">
                                    Rastrea tu paquete de forma ágil y precisa
                                </p>
                                <div className="flex w-full justify-center max-h-[52px]">
                                    <div className="w-full sm:w-[420px] relative flex items-center h-[52px]">
                                        <div className="absolute flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-5 h-5 ml-3 text-slate-400"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>

                                        <input
                                            className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border md:border-0 rounded-md pl-12 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow h-full"
                                            placeholder="Rastrea tus paquetes..."
                                        />

                                        <button
                                            className="text-sm flex items-center space-x-0.5 absolute right-2 rounded-md ml-2 bg-orange-500 pl-3 pr-1 py-2 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg hover:bg-orange-600 focus:bg-orange-700 focus:shadow-none active:bg-orange-700 hover:bg-orange-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                            type="button"
                                        >
                                            <span className="font-semibold">
                                                Rastrear
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                />
                                                <path d="M9 6l6 6l-6 6" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <ul className="flex justify-center space-x-4 text-sm justify-items-center items-center">
                                    <li className="md:border-r border-gray-500 pr-1 md:pr-4">
                                        <div className="w-full space-y-0.5">
                                            <p className="font-bold text-gray-800 md:text-white">
                                                +3 millones
                                            </p>
                                            <p className="text-gray-400 text-xs">
                                                Pedidos
                                            </p>
                                        </div>
                                    </li>
                                    <li className="md:border-r border-gray-500 pr-1 md:pr-4">
                                        <div className="w-full space-y-0.5">
                                            <p className="font-bold text-gray-800 md:text-white ">
                                                +4 millones
                                            </p>
                                            <p className="text-gray-400 text-xs">
                                                Transacciones
                                            </p>
                                        </div>
                                    </li>
                                    <li className="md:border-r border-gray-500 pr-1 md:pr-4">
                                        <div className="w-full space-y-0.5">
                                            <p className="font-bold text-gray-800 md:text-white ">
                                                434
                                            </p>
                                            <p className="text-gray-400 text-xs">
                                                Negocios
                                            </p>
                                        </div>
                                    </li>
                                    <li className="">
                                        <div className="w-full space-y-0.5">
                                            <p className="font-bold text-gray-800 md:text-white ">
                                                315
                                            </p>
                                            <p className="text-gray-400 text-xs">
                                                Vehiculos
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 justify-center gap-x-2 sm:gap-x-4 text-white mt-4 sm:mt-0 px-2 sm:px-0">
                <button className="transition-all duration-50 bg-orange-500 hover:bg-orange-600 rounded-full px-0 sm:px-4 py-3 sm:py-2 text-xs sm:text-sm w-[150px] sm:w-[192px] justify-self-end">
                    Únete como cliente
                </button>
                <button className="transition-all duration-50 border-2 border-orange-600 rounded-full px-0 sm:px-4 py-3 sm:py-2 text-xs sm:text-sm hover:bg-opacity-30 text-gray-800 md:text-white justify-self-start w-[150px] sm:w-[192px]">
                    Únete como conductor
                </button>
            </div>
            <p className="hidden md:flex mt-8 lg:mt-0 text-xs sm:text-sm justify-center lg:justify-end text-gray-200 italic">
                <span className="hidden md:flex">Hecho a mano por: </span>{" "}
                <span className="flex md:hidden">A mano por:</span>
                <a
                    className="underline flex items-center ml-1 z-20 hover:text-gray-300"
                    href="https://www.linkedin.com/in/cristian-d%C3%ADaz-390971222/"
                    target="_blank"
                >
                    Cristian Díaz
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-external-link"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                        <path d="M11 13l9 -9" />
                        <path d="M15 4h5v5" />
                    </svg>
                </a>
            </p>
        </div>
    );
};
