import React from "react";
import completeLogo from "../../assets/logosoydelivery.webp";

export const AuthVideoHover = () => {
    return (
        <div className="absolute bottom-0 w-full bg-black bg-opacity-40 text-white p-6 space-y-8">
            <img
                src={completeLogo}
                alt="logo"
                className="w-36 lg:w-52 mx-auto"
            />
            <ul className="flex justify-center space-x-4 text-sm justify-items-center items-center">
                <li className="md:border-r border-gray-500 pr-1 md:pr-4">
                    <div className="w-full space-y-0.5">
                        <p className="font-bold text-gray-800 md:text-white">
                            +3 millones
                        </p>
                        <p className="text-gray-400 text-xs">Pedidos</p>
                    </div>
                </li>
                <li className="md:border-r border-gray-500 pr-1 md:pr-4">
                    <div className="w-full space-y-0.5">
                        <p className="font-bold text-gray-800 md:text-white ">
                            +4 millones
                        </p>
                        <p className="text-gray-400 text-xs">Transacciones</p>
                    </div>
                </li>
                <li className="md:border-r border-gray-500 pr-1 md:pr-4">
                    <div className="w-full space-y-0.5">
                        <p className="font-bold text-gray-800 md:text-white ">
                            434
                        </p>
                        <p className="text-gray-400 text-xs">Negocios</p>
                    </div>
                </li>
                <li className="">
                    <div className="w-full space-y-0.5">
                        <p className="font-bold text-gray-800 md:text-white ">
                            315
                        </p>
                        <p className="text-gray-400 text-xs">Vehiculos</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};
