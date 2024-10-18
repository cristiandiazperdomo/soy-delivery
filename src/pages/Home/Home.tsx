import React from "react";
import banner from "../../assets/banner.webp";
import {Header} from "../../components/Header/Header";

import vehicles from "../../assets/vehicles.webp";

import {Footer} from "../../components/Footer/Footer";
import {HeroSection} from "../../components/HeroSection/HeroSection";
import {TrustUs} from "../../components/TrustUs/TrustUs";

import {Testimonies} from "../../components/Testimonies/Testimonies";

alert(`Vistas disponibles hasta el momento: 
    Inicio: /,
    Sobre Nosotros: /sobre-nosotros *(nueva) 
    Servicios: /servicios *(nueva - casi lista) 


    Sientanse libres de usar este diseño 
    esten interesados en mi perfil o no
`);

export const Home = () => {
    return (
        <div className="min-h-screen text-white">
            <div className="relative">
                <div className="relative">
                    <img
                        src={banner}
                        className="w-full h-[210px] md:h-[500px] lg:h-[600px] object-cover object-top"
                    />
                    <div className="absolute top-0 w-full h-full bg-black opacity-70"></div>
                </div>
                <div className="absolute top-0 left-0 right-0 container mx-auto text-white">
                    <Header />
                    <h2 className="flex md:hidden text-2xl flex flex-col font-bold px-4 text-center sm:mt-2 md:mt-12">
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
                    <p className="flex md:hidden mt-2 text-xs xl:text-sm justify-center lg:justify-end text-gray-400 sm:text-gray-200 italic">
                        <span className="hidden sm:flex">
                            Hecho a mano por:{" "}
                        </span>{" "}
                        <span className="flex sm:hidden">A mano por:</span>
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
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                <path d="M11 13l9 -9" />
                                <path d="M15 4h5v5" />
                            </svg>
                        </a>
                    </p>
                    <div className="hidden md:flex">
                        <HeroSection />
                    </div>
                </div>
            </div>

            <div className="flex md:hidden">
                <HeroSection />
            </div>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 container mx-auto min-h-screen px-4">
                <div className="py-8 max-w-screen-xl sm:py-16">
                    <div className="">
                        <p className="space-x-1.5 mb-3 text-xs tracking-tight font-bold text-orange-500">
                            <span>¿ P O R Q U É </span>
                            <span>E L E G I R</span>
                            <span>S O Y</span>
                            <span>D E L I V E R Y ?</span>
                        </p>
                        <h2 className="mb-8 text-3xl sm:text-5xl tracking-tight font-extrabold text-gray-900">
                            Descubre nuestros servicios logísticos
                            personalizados
                        </h2>
                        <p className="mb-10 font-light text-gray-500 sm:text-xl">
                            En SoyDelivery, ofrecemos soluciones que se adaptan
                            a las necesidades de tu negocio. Desde envíos en el
                            mismo día, hasta logística para grandes plataformas
                            y flotas dedicadas, nos aseguramos de que cada envío
                            sea rápido, seguro y eficiente.
                        </p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                            >
                                Únete como cliente
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M9 6l6 6l-6 6" />
                                </svg>
                            </a>
                        </div>
                        <div className="mx-auto text-center space-y-2 mt-12 lg:pr-8">
                            <img
                                src={vehicles}
                                alt="vehicles"
                                className="w-[620px] mx-auto rounded-xl"
                            />
                            <p className="text-gray-600 text-xs">
                                Contamos con camiones, camionetas y motos.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:mt-20 space-y-8">
                    <div className="flex space-x-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-4 text-orange-500 min-w-[48px] w-[48px] min-h-[48px] h-[48px]"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M12 12l3 2" />
                            <path d="M12 7v5" />
                        </svg>
                        <div className="mt-2">
                            <p className="mb-3 text-2xl tracking-tight font-bold text-gray-900">
                                Entrega en el mismo día
                            </p>
                            <p className="mb-3 font-light text-gray-500">
                                Retiramos y entregamos tus envíos{" "}
                                <strong className="font-bold">
                                    el mismo día
                                </strong>{" "}
                                para que tus clientes no tengan que esperar.
                                Contamos con{" "}
                                <strong className="font-bold">
                                    soporte activo de 8:00 a 24:00
                                </strong>{" "}
                                para que estés al tanto del estado de cada
                                envío.
                            </p>
                            <div className="flex flex-col space-y-4 sm:flex-row">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                                >
                                    Solicitar servicio
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-package text-orange-500 min-w-[48px] w-[48px] min-h-[48px] h-[48px]"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
                            <path d="M12 12l8 -4.5" />
                            <path d="M12 12l0 9" />
                            <path d="M12 12l-8 -4.5" />
                            <path d="M16 5.25l-8 4.5" />
                        </svg>
                        <div className="mt-2">
                            <p className="mb-3 text-2xl tracking-tight font-bold text-gray-900">
                                Logística para Mercado Envíos Flex
                            </p>
                            <p className="mb-3 font-light text-gray-500">
                                Nos integramos automáticamente con Mercado
                                Envíos Flex, facilitando la migración de tus
                                ventas a nuestro sistema logístico y permitiendo
                                el{" "}
                                <strong className="font-bold">
                                    seguimiento detallado de cada etapa del
                                    envío
                                </strong>
                                .
                            </p>
                            <div className="flex flex-col space-y-4 sm:flex-row">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                                >
                                    Solicitar servicio
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-map-2 text-orange-500 min-w-[48px] w-[48px] min-h-[48px] h-[48px]"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" />
                            <path d="M9 4v13" />
                            <path d="M15 7v5.5" />
                            <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
                            <path d="M19 18v.01" />
                        </svg>
                        <div className="mt-2">
                            <p className="mb-3 text-2xl tracking-tight font-bold text-gray-900">
                                Soluciones integrales
                            </p>
                            <p className="mb-3 font-light text-gray-500">
                                Enfócate en hacer crecer tus ventas, nosotros
                                nos encargamos de la logística. Ofrecemos{" "}
                                <strong className="font-bold">
                                    almacenamiento, picking, packing,
                                    etiquetado, despacho y entrega
                                </strong>
                                , todo en un solo lugar.
                            </p>
                            <div className="flex flex-col space-y-4 sm:flex-row">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                                >
                                    Solicitar servicio
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-forklift text-orange-500 min-w-[48px] w-[48px] min-h-[48px] h-[48px]"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M14 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M7 17l5 0" />
                            <path d="M3 17v-6h13v6" />
                            <path d="M5 11v-4h4" />
                            <path d="M9 11v-6h4l3 6" />
                            <path d="M22 15h-3v-10" />
                            <path d="M16 13l3 0" />
                        </svg>
                        <div className="mt-2">
                            <p className="mb-3 text-2xl tracking-tight font-bold text-gray-900">
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
                                que estará a tu disposición cuando lo necesites.
                            </p>
                            <div className="flex flex-col space-y-4 sm:flex-row">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                                >
                                    Solicitar servicio
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-gray-50 px-4 pt-12 lg:pt-20 mt-8 lg:mt-0">
                <section className="w-full flex flex-col items-center gap-x-4 container mx-auto text-gray-700 space-y-12 pb-20 px-4">
                    <div className="text-black text-2xl">
                        <TrustUs />
                    </div>
                </section>
            </div>
            <div className="relative mt-8 lg:mt-0 py-12 overflow-hidden">
                <Testimonies />
            </div>
            <Footer />
        </div>
    );
};
