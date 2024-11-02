import React from "react";

export const Services = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-gray-300 rounded-3xl border">
            {[
                {
                    title: "Entrega",
                    subtitle: "Entrega en el mismo día",
                    img: "https://static.vecteezy.com/system/resources/previews/012/174/294/non_2x/delivery-courier-man-holding-parcel-box-png.png",
                    svg: (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-4 w-[36px] h-[36px]"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M12 12l3 2" />
                            <path d="M12 7v5" />
                        </svg>
                    ),
                    description: (
                        <>
                            Retiramos y entregamos el{" "}
                            <span className="font-semibold">mismo día</span> con{" "}
                            <span className="font-semibold">
                                soporte activo de 8:00 a 24:00
                            </span>
                            .
                        </>
                    ),
                },
                {
                    title: "Logística",
                    subtitle: "Logística para Mercado Envíos Flex",
                    img: "https://static.vecteezy.com/system/resources/previews/024/135/082/non_2x/delivery-car-with-parcel-box-transport-vehicle-3d-rendering-png.png",
                    svg: (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-package w-[36px] h-[36px]"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
                            <path d="M12 12l8 -4.5" />
                            <path d="M12 12l0 9" />
                            <path d="M12 12l-8 -4.5" />
                            <path d="M16 5.25l-8 4.5" />
                        </svg>
                    ),
                    description: (
                        <>
                            Integración automática con{" "}
                            <span className="font-semibold">
                                Mercado Envíos Flex
                            </span>{" "}
                            y{" "}
                            <span className="font-semibold">
                                seguimiento detallado
                            </span>
                            .
                        </>
                    ),
                },
                {
                    title: "Soluciones",
                    subtitle: "Soluciones integrales",
                    img: "https://static.vecteezy.com/system/resources/previews/044/764/624/non_2x/3d-delivery-van-and-cardboard-boxes-and-map-png.png",
                    svg: (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-map-2 w-[36px] h-[36px]"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" />
                            <path d="M9 4v13" />
                            <path d="M15 7v5.5" />
                            <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
                            <path d="M19 18v.01" />
                        </svg>
                    ),
                    description: (
                        <>
                            Nos ocupamos de todo:{" "}
                            <span className="font-semibold">
                                almacenamiento, picking, packing, y entrega
                            </span>
                            .
                        </>
                    ),
                },
                {
                    title: "Flota",
                    subtitle: "Flota Dedicada",
                    img: "https://static.vecteezy.com/system/resources/previews/020/716/680/non_2x/3d-cartoon-delivery-truck-products-delivery-vehicle-parcels-transportation-car-3d-rendering-illustration-png.png",

                    svg: (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-forklift w-[36px] h-[36px]"
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
                    ),
                    description: (
                        <>
                            <span className="font-semibold">
                                Flota exclusiva
                            </span>{" "}
                            adaptada a tus necesidades, disponible cuando la
                            necesites.
                        </>
                    ),
                },
            ].map(({title, subtitle, img, svg, description}, index) => {
                const isDoubleColumn = index === 1 || index === 2;

                return (
                    <div
                        className={`transition-all duration-200 group w-full bg-white rounded-3xl border p-6 hover:bg-black hover:text-white cursor-pointer ${
                            isDoubleColumn ? "flex col-span-2" : ""
                        } `}
                        key={index}
                    >
                        <div className="flex flex-col justify-between">
                            <div
                                className={`${
                                    isDoubleColumn
                                        ? ""
                                        : "flex justify-between space-x-2"
                                }`}
                            >
                                <p className="hidden md:flex">{title}</p>
                                {!isDoubleColumn && (
                                    <img
                                        src={img}
                                        className={`hidden sm:flex h-[200px] w-auto object-cover`}
                                    ></img>
                                )}
                            </div>
                            <div className="space-y-2">
                                <header>{svg}</header>
                                <div className="font-semibold text-2xl">
                                    {subtitle}
                                </div>

                                <footer className="font-light text-sm group-hover:text-gray-100 max-w-md">
                                    {description}
                                </footer>
                            </div>
                        </div>
                        {isDoubleColumn && (
                            <img
                                src={img}
                                className={`hidden sm:flex h-[280px] w-auto`}
                            ></img>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
