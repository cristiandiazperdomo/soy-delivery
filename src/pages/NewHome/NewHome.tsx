import React from "react";
import logo from "../../assets/logo.webp";
import vehicles from "../../assets/vehicles.webp";
import {TrustUs} from "../../components/TrustUs/TrustUs";
import {Services} from "../../components/Services/Services";
import {Link} from "react-router-dom";
import {Footer} from "../../components/Footer/Footer";
import {ClientsOpinions} from "../../components/ClientsOpinions/ClientsOpinions";
import {Faq} from "../../components/Faq/Faq";

export const NewHome = () => {
    return (
        <div className="bg-gray-50/40 h-screen text-zinc-900 select-none">
            <div className="px-4 xl:px-0">
                <div className="max-w-7xl mx-auto">
                    <header className="flex justify-between items-center h-[80px] md:h-[108px]">
                        <div className="flex items-center space-x-12">
                            <div className="flex items-center space-x-1.5">
                                <img
                                    src={logo}
                                    className="h-[40px] w-auto mb-0.5"
                                    alt="logo-header"
                                />
                                <p className="text-2xl font-bold">
                                    SoyDelivery
                                </p>
                            </div>
                            <ul className="hidden md:flex space-x-6">
                                {[
                                    {title: "Inicio", route: "/"},
                                    {
                                        title: "Sobre nosotros",
                                        route: "/sobre-nosotros",
                                    },
                                    {title: "Servicios", route: "/servicios"},
                                    {
                                        title: "Contactanos",
                                        route: "/contactanos",
                                    },
                                ].map(
                                    ({
                                        title,
                                        route,
                                    }: {
                                        title: string;
                                        route: string;
                                    }) => (
                                        <li>
                                            <Link
                                                to={route}
                                                className="w-full h-full"
                                            >
                                                <p className="text-sm border-gray-500 hover:border-b cursor-pointer">
                                                    {title}
                                                </p>
                                            </Link>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                        <div className="flex space-x-4">
                            <button className="bg-primary sm:bg-white text-white sm:text-black hover:text-gray-500 px-4 py-2 text-md border-0 sm:border rounded-md">
                                Entrar
                            </button>
                            <button className="hidden sm:flex bg-primary hover:bg-primary/80 px-4 py-2 text-white rounded-md text-md">
                                Registrarse
                            </button>
                        </div>
                    </header>
                </div>
                <main>
                    <div className="py-8 md:py-16 max-w-7xl mx-auto">
                        <div className="grid justify-items-center md:justify-items-start grid-cols-1 md:grid-cols-2 gap-4 xl:gap-0">
                            <div className="order-1 md:order-0">
                                <div className="text-center md:text-left w-full space-y-6">
                                    <p className="text-4xl md:text-5xl lg:text-6xl font-semibold md:font-bold">
                                        Rastrea tu{" "}
                                        <br className="hidden md:flex lg:hidden" />
                                        <span className="relative inline-block">
                                            paquete
                                            <svg
                                                className="absolute -bottom-2 md:-bottom-4 left-1/2 transform -translate-x-1/2 text-primary w-[112px] md:w-[180px] lg:w-[200px] "
                                                aria-hidden="true"
                                                role="presentation"
                                                viewBox="0 0 188 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M 0 10 C 20 8 40 3 60 5 C 80 7 90 12 110 10 C 130 8 150 2 170 4 C 180 5 188 3 188 3"
                                                    stroke="currentColor"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M 0 8 C 15 5 35 1 55 2 C 75 3 100 8 125 6 C 145 4 160 2 175 2 C 183 2 188 4 188 4"
                                                    stroke="currentColor"
                                                    strokeWidth="1"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                        </span>{" "}
                                        ahora
                                    </p>
                                    <p className="max-w-sm text-lg md:text-xl">
                                        Envíos adapatados, rápidos y seguros,
                                        desde entregas en el día hasta logística
                                        para grandes plataformas.
                                    </p>
                                    <div className="pt-4 mx-auto md:mx-0 w-[300px] sm:w-[360px] lg:w-[420px]">
                                        <div className=" relative flex items-center h-[52px]">
                                            <div className="absolute flex items-center justify-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-5 h-5 ml-3 text-gray-400"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>

                                            <input
                                                className="w-full bg-white placeholder:text-gray-500/80 text-gray-700 text-sm rounded-md pl-12 pr-28 py-2 transition duration-300 ease focus:outline-none border shadow-xl focus:shadow-2xl focus:shadow-gray-400 h-full"
                                                placeholder="#A1B2C3D4E"
                                            />

                                            <button
                                                className="text-sm flex items-center space-x-0.5 absolute right-2 rounded-md ml-2 bg-primary pl-3 pr-1 py-2 border border-transparent text-center text-sm text-white transition-all hover:shadow-lg hover:bg-primary focus:bg-primary focus:shadow-none active:bg-primary hover:bg-primary active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex justify-center md:justify-start items-center space-x-2 mt-4">
                                        <span className="text-gray-500 text-xs">
                                            Apoyado por{" "}
                                        </span>
                                        <ul className="flex items-center space-x-2">
                                            {[
                                                "https://play-lh.googleusercontent.com/qdUwE-lJu1sqVrPt0gxUF4qMbn0ihlZiFn4nhlCS8HwTmqbmALLNqjAkZFFJ2VMD1Q",
                                                "https://play-lh.googleusercontent.com/9v08ai07I8aoFLj5M-90nzWPpvyNzOVgA2ZWF9avdW7oS8L9YqF9trVI44SUn2qGTA0",
                                                "https://play-lh.googleusercontent.com/mv5GpboO2prRf5YuzYgFDnI-iEB4nCoa_s2AUNy1dD-t5YM9Xn0_UEbqjVRvT62kYi_G",
                                            ].map((brand) => (
                                                <li className="h-[26px] w-[26px] rounded-full overflow-hidden">
                                                    <img
                                                        src={brand}
                                                        alt="brand"
                                                        className=""
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex items-center justify-center w-[28px] h-[28px] bg-primary rounded-full text-xs text-white">
                                            +434
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 max-w-sm md:border-b border-gray-300 mt-16 h-[60px] md:h-[120px]">
                                    <div className="w-full space-y-1 text-center md:text-left">
                                        <p className="text-3xl lg:text-4xl font-semibold">
                                            75.2%
                                        </p>
                                        <p className="text-sm md:text-md lg:text-lg">
                                            Entregado en el día
                                        </p>
                                    </div>
                                    <div className="border-l border-gray-300 md:pl-10 space-y-1 text-center md:text-left">
                                        <p className="text-3xl lg:text-4xl font-semibold">
                                            313
                                        </p>
                                        <p className="text-sm md:text-md lg:text-lg">
                                            Vehiculos en circulación
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="order-0 md:order-1">
                                <img
                                    src={vehicles}
                                    alt="vehicles"
                                    className="rounded-md w-[420px] lg:w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <TrustUs />
                    </div>

                    <div className="max-w-7xl mx-auto py-[100px]">
                        <p className="space-x-1.5 mb-3 text-xs text-center tracking-tight font-bold text-primary">
                            <span>¿ C Ó M O </span>
                            <span>F U N C I O N A ?</span>
                        </p>
                        <div className="mb-12">
                            <h2 className="text-4xl text-center font-semibold mb-2">
                                Bienvenido/a a Soy Delivery, Servicios de
                                Logistica.
                            </h2>
                            <p className="text-center text-gray-500">
                                Haz clic en un servicio para obtener más
                                información y solicitarlo.
                            </p>
                        </div>

                        <Services />
                    </div>
                    <div className="max-w-7xl mx-auto py-[100px]">
                        <div className="mb-12">
                            <h2 className="text-4xl text-center font-semibold mb-2">
                                ¿Qué dicen <br /> nuestros{" "}
                                <span className="relative">
                                    clientes
                                    <svg
                                        className="absolute text-primary w-[50px] md:w-[58px] lg:w-[74px] left-1/2 -translate-x-1/2 -bottom-[3px] md:-bottom-[5px] lg:-bottom-[7px]"
                                        aria-hidden="true"
                                        role="presentation"
                                        viewBox="0 0 74 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 1.87277C32.82 0.799621 49.1947 0.621921 73 1.87276M41.6667 5.53226C49.316 5.53729 56.5469 5.68564 64.3333 6"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                        ></path>
                                    </svg>
                                </span>
                                ?
                            </h2>
                            <p className="text-center text-gray-500">
                                Haz clic en un servicio para obtener más
                                información y solicitarlo.
                            </p>
                        </div>
                        <ClientsOpinions />
                    </div>
                    <div className="max-w-7xl mx-auto py-[100px]">
                        <div className="mb-12">
                            <h2 className="text-4xl text-center font-semibold mb-2">
                                Preguntas{" "}
                                <span className="relative">
                                    frecuentes
                                    <svg
                                        className="absolute text-primary w-[180px] -left-[4px] -bottom-[6px]"
                                        aria-hidden="true"
                                        role="presentation"
                                        width="212"
                                        height="10"
                                        viewBox="0 0 212 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 2.83279C43.1349 0.354725 89.393 0.423658 211 2.83279M1 9C12.1737 7.45822 39.4345 4.88858 57.6901 4.88858M63 4.88858H68.4795"
                                            stroke="currentColor"
                                            stroke-width="1.6"
                                            stroke-linecap="round"
                                        ></path>
                                    </svg>
                                </span>
                            </h2>
                            <p className="text-center text-gray-500 text-md">
                                Estas son preguntas comúnes de nuestros
                                clientes.
                            </p>
                            <p className="text-center text-gray-500 text-md">
                                ¿No puedes encontrar lo que estas buscando?{" "}
                                <span className="border-b hover:border-gray-500 cursor-pointer">
                                    Charla con nuestro amigable equipo
                                </span>
                            </p>
                        </div>
                        <Faq />
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};
