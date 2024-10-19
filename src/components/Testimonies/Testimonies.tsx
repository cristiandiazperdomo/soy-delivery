import React from "react";
import eltunel from "../../assets/eltunel.webp";

export const Testimonies = () => {
    return (
        <section className="w-full gap-x-4 container mx-auto text-gray-700 space-y-12 pb-20 px-4 z-10 pt-12 lg:pt-20 mt-8 lg:mt-0">
            <div className="text-center space-y-12">
                <div className="flex items-center flex-col space-y-4">
                    <div className="relative">
                        <p className="text-gray-800 text-2xl font-bold py-0.5 rounded">
                            Lee lo que nuestros clientes dicen
                        </p>
                        <div className="hidden sm:flex bg-primary/20 w-full h-[12px] -mt-4"></div>
                    </div>
                    <span className="w-full p-2 rounded-full text-gray-400 font-bold">
                        Ellos comparten su satisfacción y nosotros transformamos
                        su confianza en sonrisas con cada entrega.
                    </span>
                </div>
                <div className="relative w-full flex items-start md:items-center justify-center">
                    <div className="hidden md:flex transition-all duration-100 p-2 hover:shadow-xl rounded-full cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left w-[40px] h-[40px]"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                            <path d="M5 12l6 6" />
                            <path d="M5 12l6 -6" />
                        </svg>
                    </div>
                    <div className="flex flex-col space-y-8 items-center mx-auto w-full">
                        <div className="flex items-center space-x-2 sm:space-x-4">
                            <div className="flex md:hidden transition-all duration-100 p-2 hover:shadow-xl rounded-full cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left w-[28px] sm:w-[40px] h-[28px] sm:h-[40px]"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M5 12l14 0" />
                                    <path d="M5 12l6 6" />
                                    <path d="M5 12l6 -6" />
                                </svg>
                            </div>
                            <img
                                className="w-[40px] sm:w-[52px] h-[40px] sm:h-[52px] rounded-full shadow-lg"
                                src="https://descuento.uy/wp-content/uploads/2016/12/10247406_849822021701244_5282400717090627070_n.jpg"
                                alt="zenit"
                            />
                            <img
                                src={eltunel}
                                className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] rounded-full shadow-lg"
                            />
                            <img
                                className="w-[40px] sm:w-[52px] h-[40px] sm:h-[52px] rounded-full shadow-lg"
                                src="https://www.paseocentro.com.uy/wp-content/uploads/2021/12/copacaban.png"
                                alt="zenit"
                            />
                            <div className="flex md:hidden transition-all duration-100 p-2 hover:shadow-xl rounded-full cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right w-[28px] sm:w-[40px] h-[28px] sm:h-[40px]"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M5 12l14 0" />
                                    <path d="M13 18l6 -6" />
                                    <path d="M13 6l6 6" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col font-bold">
                            <p className="text-lg">Gerente de El Tunel</p>
                            <p className="text-gray-400 text-md">
                                Gabriel Laufer
                            </p>
                        </div>
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map(() => (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="icon icon-tabler icons-tabler-filled icon-tabler-star w-[20px] h-[20px] text-primary"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
                                </svg>
                            ))}
                        </div>
                        <div className="relative w-full h-[120px] flex justify-center">
                            <div className="z-40 w-full sm:w-[460px]">
                                <p className="text-lg">
                                    Conforme con la decisión de haber contratado
                                    a SoyDelivery Cumplen con las entregas en el
                                    día, lo que nos permite ofrecer a los
                                    clientes una buena experiencia de compra
                                </p>
                            </div>
                            <div className="transition-all duration-100 flex justify-between absolute -top-4 left-0 z-10 opacity-20 w-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-quote w-16 h-16 right-0 rotate-180 opacity-50 sm:opacity-100"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
                                    <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
                                </svg>
                            </div>
                            <div className="transition-all duration-100 flex justify-between absolute bottom-0 right-0 z-10 opacity-20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-quote w-16 h-16 right-0 opacity-50 sm:opacity-100"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
                                    <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex transition-all duration-100 p-2 hover:shadow-xl rounded-full cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right w-[40px] h-[40px]"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                            <path d="M13 18l6 -6" />
                            <path d="M13 6l6 6" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};
