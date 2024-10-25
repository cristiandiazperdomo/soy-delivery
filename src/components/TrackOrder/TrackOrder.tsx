import React from "react";

import logo from "../../assets/logo.webp";
import {useAppSelector} from "../../hooks/reduxTypes";

interface TrackOrderProps {
    showTrackOrder: boolean;
    setShowTrackOrder: (value: boolean) => void;
}

export const TrackOrder = ({
    showTrackOrder,
    setShowTrackOrder,
}: TrackOrderProps) => {
    const order = useAppSelector((state) => state.search);

    const {
        productName,
        price,
        payMethod,
        address,
        providerName,
        driverName,
        customerName,
    } = order;

    return (
        <div
            className={`absolute transition-all duration-50 ${
                showTrackOrder ? "z-50 opacity-100" : "-z-10 opacity-0"
            }`}
        >
            <div className="relative">
                <div
                    className="fixed left-0 top-0 w-screen h-screen bg-black bg-opacity-50"
                    onClick={() => setShowTrackOrder(false)}
                ></div>
                <aside className="fixed right-0 top-0 h-screen font-semibold text-gray-700 bg-white w-[320px] sm:w-[580px] z-50">
                    <div className="flex flex-col">
                        <div className="space-y-8 px-4 pt-10">
                            <div className="flex justify-between">
                                <h2 className="text-3xl">
                                    Orden Rastreada -{" "}
                                    <span>
                                        {productName} - {price}
                                    </span>
                                </h2>
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
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-x cursor-pointer"
                                    onClick={() => setShowTrackOrder(false)}
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M18 6l-12 12" />
                                    <path d="M6 6l12 12" />
                                </svg>
                            </div>
                            <div className="space-y-8">
                                <div className="flex space-x-2">
                                    <div className="w-[52px] h-[52px] bg-primary/[10%] p-2 rounded-lg">
                                        <img
                                            src={logo}
                                            alt="logo"
                                            className="h-full mx-auto"
                                        />
                                    </div>
                                    <div>
                                        <p>Soy Delivery Envios</p>
                                        <p className="uppercase text-blue-500">
                                            #{order.id}
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-2xl">En Progreso</p>
                                    <p className="text-sm space-x-1">
                                        <span className="text-gray-400">
                                            Entrega estimada:
                                        </span>
                                        <span>Mañana</span>
                                    </p>
                                </div>
                                <div className="grid grid-cols-4 gap-x-4">
                                    {[
                                        "Esperando",
                                        "Pendiente",
                                        "En Progreso",
                                        "Entregado",
                                    ].map((status, index) => (
                                        <div className="space-y-2" key={index}>
                                            <div
                                                className={`flex items-center ${
                                                    index === 3
                                                        ? "bg-gray-200"
                                                        : "bg-green-600"
                                                } text-sm text-gray-500 h-[8px] rounded-full`}
                                            ></div>
                                            <div className="flex items-center space-x-2">
                                                {index !== 3 ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="icon icon-tabler icons-tabler-filled icon-tabler-circle-check text-green-600"
                                                    >
                                                        <path
                                                            stroke="none"
                                                            d="M0 0h24v24H0z"
                                                            fill="none"
                                                        />
                                                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                                                    </svg>
                                                ) : (
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
                                                        className="icon icon-tabler icons-tabler-outline icon-tabler-loader-2 text-gray-500 animate-spin"
                                                    >
                                                        <path
                                                            stroke="none"
                                                            d="M0 0h24v24H0z"
                                                            fill="none"
                                                        />
                                                        <path d="M12 3a9 9 0 1 0 9 9" />
                                                    </svg>
                                                )}
                                                <p className="text-gray-500 font-normal text-sm">
                                                    {status}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="select-none">
                                    <ul className="">
                                        <li className="text-black space-y-2 border-b-2">
                                            <details
                                                className="border-gray-100 p-4"
                                                style={{
                                                    background: "transparent",
                                                }}
                                            >
                                                <summary className="flex justify-between text-md">
                                                    <span className="text-xl font-semibold">
                                                        Progreso de Envío
                                                    </span>

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
                                                        className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down min-w-6 w-6 min-h-6 h-6"
                                                    >
                                                        <path
                                                            stroke="none"
                                                            d="M0 0h24v24H0z"
                                                            fill="none"
                                                        />
                                                        <path d="M6 9l6 6l6 -6" />
                                                    </svg>
                                                </summary>
                                                <div className="text-gray-500 mt-2 text-sm mt-4">
                                                    {[29, 28, 27].map(
                                                        (num, index) => (
                                                            <div
                                                                className="space-x-2 bg-white"
                                                                key={num}
                                                            >
                                                                <div className="flex items-start space-x-2">
                                                                    <div>
                                                                        <div className="p-1 bg-gray-100 rounded-full">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                strokeWidth="2"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                className="icon icon-tabler icons-tabler-outline icon-tabler-plus w-4 h-4"
                                                                            >
                                                                                <path
                                                                                    stroke="none"
                                                                                    d="M0 0h24v24H0z"
                                                                                    fill="none"
                                                                                />
                                                                                <path d="M12 5l0 14" />
                                                                                <path d="M5 12l14 0" />
                                                                            </svg>
                                                                        </div>
                                                                    </div>

                                                                    <div className="text-sm text-gray-800">
                                                                        <p>
                                                                            Junio{" "}
                                                                            {
                                                                                num
                                                                            }
                                                                            ,
                                                                            2023
                                                                            10:14PM
                                                                        </p>
                                                                        <p
                                                                            className={`text-gray-500 font-normal h-[32px] ${
                                                                                index ===
                                                                                2
                                                                                    ? "border-l-2 border-dashed"
                                                                                    : "border-l-2"
                                                                            } -ml-[21px] pl-[18px] my-1 mt-2`}
                                                                        >
                                                                            Etiquetado
                                                                            en
                                                                            Montevideo
                                                                            -
                                                                            SIDNEY
                                                                            -
                                                                            NSW
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </details>
                                        </li>
                                        <li className="text-black space-y-2 border-b-2">
                                            <details className="border-gray-100 p-4">
                                                <summary className="flex justify-between text-md">
                                                    <span className="text-xl font-semibold">
                                                        Detalles de dirección
                                                    </span>

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
                                                        className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down min-w-6 w-6 min-h-6 h-6"
                                                    >
                                                        <path
                                                            stroke="none"
                                                            d="M0 0h24v24H0z"
                                                            fill="none"
                                                        />
                                                        <path d="M6 9l6 6l6 -6" />
                                                    </svg>
                                                </summary>
                                                <ul className="text-gray-500 mt-2 text-sm space-y-1">
                                                    <li className="flex space-x-2 capitalize">
                                                        <span className="text-gray-500">
                                                            Provedor:
                                                        </span>

                                                        <span className="text-gray-800">
                                                            {providerName}
                                                        </span>
                                                    </li>
                                                    <li className="flex space-x-2 capitalize">
                                                        <span className="text-gray-500">
                                                            Conductor:
                                                        </span>

                                                        <span className="text-gray-800">
                                                            {driverName}
                                                        </span>
                                                    </li>
                                                    <li className="flex space-x-2 capitalize">
                                                        <span className="text-gray-500">
                                                            Cliente:
                                                        </span>

                                                        <span className="text-gray-800">
                                                            {customerName}
                                                        </span>
                                                    </li>
                                                    <li className="flex space-x-2 capitalize">
                                                        <span className="text-gray-500">
                                                            Método de pago:
                                                        </span>
                                                        <span className="text-gray-800">
                                                            {payMethod}
                                                        </span>
                                                    </li>
                                                    <li className="flex space-x-2 capitalize">
                                                        <span className="text-gray-500">
                                                            Dirección:
                                                        </span>
                                                        <span className="text-gray-800">
                                                            {address}
                                                        </span>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};
