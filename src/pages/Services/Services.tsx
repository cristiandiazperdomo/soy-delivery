import React from "react";
import {Header} from "../../components/Header/Header";
import {Faq} from "../../components/Faq/Faq";
import {Footer} from "../../components/Footer/Footer";

import flota from "../../assets/flota.webp";

export const Services = () => {
    return (
        <main className="bg-white">
            <div>
                <div className="relative flex flex-col justify-between top-0 left-0 right-0 container mx-auto">
                    <Header />
                    <div className="flex flex-col sm:flex-row justify-between my-12 mb-6 px-4 lg:space-x-12">
                        <div className="flex flex-wrap md:flex-no-wrap text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                            <p className="">
                                Mismo día o Siguiente día. <br />
                                Entregamos Segun Tu Marco de Trabajo.
                            </p>
                        </div>
                        <div className="w-full sm:w-[320px] xl:w-[460px] 2xl:w-[360px] space-y-8">
                            <p className="">
                                Soluciones que se adaptan a las necesidades de
                                tu negocio. Nos aseguramos de que cada envío sea
                                rápido, seguro y eficiente.
                            </p>
                            <button className="bg-blue-950 text-white py-2 px-6 rounded-full">
                                Explora nuestros servicios
                            </button>
                        </div>
                    </div>
                </div>
                <div className="px-4 lg:px-0">
                    <div className="flex flex-col lg:flex-row lg:h-[600px]">
                        <img
                            src={flota}
                            alt="flota"
                            className="w-full lg:w-[600px] xl:w-[800px] 2xl:w-[1000px] h-[200px] md:h-[600px] object-cover"
                        />
                        <div className="grid grid-cols-2 w-full h-full">
                            <div
                                className="h-full w-full flex items-center justify-center min-h-[120px]"
                                style={{background: "#EA712E"}}
                            >
                                <div className="flex flex-col items-center text-white">
                                    <p className="text-xl md:text-3xl 2xl:text-4xl font-semibold">
                                        +3millones
                                    </p>
                                    <p className="text-xs sm:text-md md:text-lg">
                                        Total de envios
                                    </p>
                                </div>
                            </div>
                            <div className="h-full w-full bg-zinc-950 flex items-center justify-center min-h-[120px]">
                                <div className="flex flex-col items-center text-white">
                                    <p className="text-xl md:text-3xl 2xl:text-4xl font-semibold">
                                        +4.5millones
                                    </p>
                                    <p className="text-xs sm:text-md md:text-lg">
                                        Total de transacciones
                                    </p>
                                </div>
                            </div>
                            <div className="h-full w-full bg-gray-100 flex items-center justify-center min-h-[120px]">
                                <div className="flex flex-col items-center text-black">
                                    <p className="text-xl md:text-3xl 2xl:text-4xl font-semibold">
                                        434
                                    </p>
                                    <p className="text-xs sm:text-md md:text-lg">
                                        Total de negocios
                                    </p>
                                </div>
                            </div>
                            <div
                                className="h-full w-full flex items-center justify-center min-h-[120px]"
                                style={{background: "#EA712E"}}
                            >
                                <div className="flex flex-col items-center text-white">
                                    <p className="text-xl md:text-3xl 2xl:text-4xl font-semibold">
                                        +315
                                    </p>
                                    <p className="text-xs sm:text-md md:text-lg">
                                        Total de vehiculos
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-20 text-center">
                        <div className="container mx-auto space-y-4">
                            <p className="space-x-1.5 text-xs tracking-tight font-bold text-orange-500">
                                <span>¿ P O R Q U É </span>
                                <span>E L E G I R</span>
                                <span>S O Y</span>
                                <span>D E L I V E R Y ?</span>
                            </p>
                            <h2 className="pb-12 text-3xl sm:text-5xl tracking-tight font-semibold text-gray-900">
                                Descubre nuestros servicios logísticos
                                personalizados
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-y-0 xl:gap-x-2 text-left">
                                <div
                                    className="flex flex-col items-start space-y-4 w-full h-full p-6 h-[300px]"
                                    style={{background: "#EA712E"}}
                                >
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
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-package w-[48px] h-[48px]"
                                        style={{color: "#001F3F"}}
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
                                        <path d="M12 12l8 -4.5" />
                                        <path d="M12 12l0 9" />
                                        <path d="M12 12l-8 -4.5" />
                                        <path d="M16 5.25l-8 4.5" />
                                    </svg>
                                    <div className="space-y-3">
                                        <p
                                            className="font-bold text-2xl"
                                            style={{color: "#001F3F"}}
                                        >
                                            Entrega en el mismo día
                                        </p>
                                        <p className="mb-3 font-light text-gray-50">
                                            Retiramos y entregamos tus envíos{" "}
                                            <strong className="font-bold">
                                                el mismo día
                                            </strong>{" "}
                                            para que tus clientes no tengan que
                                            esperar. Contamos con{" "}
                                            <strong className="font-bold">
                                                soporte activo de 8:00 a 24:00
                                            </strong>{" "}
                                            para que estés al tanto del estado
                                            de cada envío.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start space-y-4 w-full h-full p-6 bg-gray-50 h-[300px]">
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
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-package w-[48px] h-[48px] text-gray-400"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
                                        <path d="M12 12l8 -4.5" />
                                        <path d="M12 12l0 9" />
                                        <path d="M12 12l-8 -4.5" />
                                        <path d="M16 5.25l-8 4.5" />
                                    </svg>
                                    <div className="space-y-3">
                                        <p className="font-bold text-2xl">
                                            Logística para Mercado Envíos Flex
                                        </p>
                                        <p className="mb-3 font-light text-gray-500">
                                            Nos integramos automáticamente con
                                            Mercado Envíos Flex, facilitando la
                                            migración de tus ventas a nuestro
                                            sistema logístico y permitiendo el{" "}
                                            <strong className="font-bold">
                                                seguimiento detallado de cada
                                                etapa del envío
                                            </strong>
                                            .
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start space-y-4 w-full h-full p-6 bg-gray-50 h-[300px]">
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
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-package w-[48px] h-[48px] text-gray-400"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
                                        <path d="M12 12l8 -4.5" />
                                        <path d="M12 12l0 9" />
                                        <path d="M12 12l-8 -4.5" />
                                        <path d="M16 5.25l-8 4.5" />
                                    </svg>
                                    <div className="space-y-3">
                                        <p className="font-bold text-2xl">
                                            Soluciones integrales
                                        </p>
                                        <p className="mb-3 font-light text-gray-500">
                                            Enfócate en hacer crecer tus ventas,
                                            nosotros nos encargamos de la
                                            logística. Ofrecemos{" "}
                                            <strong className="font-bold">
                                                almacenamiento, picking,
                                                packing, etiquetado, despacho y
                                                entrega
                                            </strong>
                                            , todo en un solo lugar.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start space-y-4 w-full h-full p-6 bg-gray-50 h-[300px]">
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
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-package w-[48px] h-[48px] text-gray-400"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
                                        <path d="M12 12l8 -4.5" />
                                        <path d="M12 12l0 9" />
                                        <path d="M12 12l-8 -4.5" />
                                        <path d="M16 5.25l-8 4.5" />
                                    </svg>
                                    <div className="space-y-3">
                                        <p className="font-bold text-2xl">
                                            Flota Dedicada
                                        </p>
                                        <p className="mb-3 font-light text-gray-500">
                                            Diseñamos soluciones de transporte{" "}
                                            <strong className="font-bold">
                                                adaptadas a tus necesidades
                                            </strong>
                                            . Disponemos de una{" "}
                                            <strong className="font-bold">
                                                flota dedicada
                                            </strong>{" "}
                                            que estará a tu disposición cuando
                                            lo necesites.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto pb-12">
                        <Faq />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};
