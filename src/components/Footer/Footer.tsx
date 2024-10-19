import React from "react";

import logo from "../../assets/logosoydelivery.webp";

export const Footer = () => {
    return (
        <footer className="bg-zinc-900">
            <div className="container mx-auto">
                <div className="w-full p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="/" className="flex items-center mb-4">
                                <img
                                    src={logo}
                                    alt="SoyDelivery Logo"
                                    className="h-14 text-white"
                                />
                            </a>
                            <div className="text-gray-200">
                                <p className="mb-1">
                                    <strong>Dirección</strong>
                                    <br />
                                    <br />
                                    Montevideo: República de Corea 2962
                                    <br />
                                    Maldonado: San Salvador 1480
                                </p>
                                <br />

                                <p>
                                    <strong>Contacto</strong>
                                    <br />
                                    <br />
                                    <a
                                        href="mailto:comercial@soydelivery.com.uy"
                                        className="hover:underline"
                                    >
                                        comercial@soydelivery.com.uy
                                    </a>
                                    <br />
                                    <a
                                        href="mailto:rrhh@soydelivery.com.uy"
                                        className="hover:underline"
                                    >
                                        rrhh@soydelivery.com.uy
                                    </a>
                                    <br />
                                    <a
                                        href="mailto:atc@soydelivery.com.uy"
                                        className="hover:underline"
                                    >
                                        atc@soydelivery.com.uy
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase">
                                    Recursos
                                </h2>
                                <ul className="text-gray-100 font-medium">
                                    <li className="mb-4 cursor-pointer">
                                        <a className="hover:underline">
                                            Inicio
                                        </a>
                                    </li>
                                    <li className="mb-4 cursor-pointer">
                                        <a className="hover:underline">
                                            Sobre nosotros
                                        </a>
                                    </li>
                                    <li className="mb-4 cursor-pointer">
                                        <a className="hover:underline">
                                            Servicios
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase">
                                    Siguenos
                                </h2>
                                <ul className="text-gray-100 font-medium">
                                    <li className="mb-4 cursor-pointer">
                                        <a className="hover:underline">
                                            Instagram
                                        </a>
                                    </li>
                                    <li className="mb-4 cursor-pointer">
                                        <a className="hover:underline">
                                            Facebook
                                        </a>
                                    </li>
                                    <li className="mb-4 cursor-pointer">
                                        <a className="hover:underline">
                                            Twitter
                                        </a>
                                    </li>
                                    <li className="mb-4 cursor-pointer">
                                        <a className="hover:underline">
                                            Youtube
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between my-6 border-y-2 border-dashed border-zinc-700 sm:mx-auto lg:my-8 py-8">
                        <p className="text-md md:text-2xl font-semibold text-white">
                            ¿Tienes un paquete que entregar?
                        </p>
                        <button
                            className="text-sm flex items-center space-x-0.5 rounded-md ml-2 bg-primary px-2 md:px-5 py-3 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg hover:bg-primary/90 focus:shadow-none active:bg-primary hover:bg-primary active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            <span className="font-semibold">Contactanos</span>
                        </button>
                    </div>
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-100 sm:text-center">
                            © 2024{" "}
                            <a className="hover:underline">SoyDelivery™</a>,
                            Inc.
                        </span>
                        <div className="flex mt-4 sm:justify-center items-center sm:mt-0">
                            <a
                                href="#"
                                className="text-gray-100 hover:text-gray-400"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M16.5 7.5l0 .01" />
                                </svg>
                                <span className="sr-only">Instagram page</span>
                            </a>
                            <a
                                href="#"
                                className="text-gray-100 hover:text-gray-400 ms-3"
                            >
                                <svg
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 8 19"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a
                                href="#"
                                className="text-gray-100 hover:text-gray-400 ms-5"
                            >
                                <svg
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 17"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="sr-only">Twitter page</span>
                            </a>
                            <a
                                href="#"
                                className="text-gray-100 hover:text-gray-400 ms-5"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="icon icon-tabler icons-tabler-filled icon-tabler-brand-youtube"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" />
                                </svg>
                                <span className="sr-only">Youtube page</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
