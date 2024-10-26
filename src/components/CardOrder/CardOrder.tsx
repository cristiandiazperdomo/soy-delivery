import React from "react";
import {Order} from "../../interfaces/Order";

export const CardOrder = (order: Order) => {
    const {
        id,
        productName,
        customerName,
        providerName,
        driverName,
        price,
        payMethod,
        status,
        address,
    } = order;

    return (
        <div className="border p-4 rounded-lg">
            <div className="flex justify-between font-normal text-sm">
                <div className="flex items-center space-x-2 text-gray-500">
                    <input
                        type="checkbox"
                        name="checkbox"
                        className="w-5 h-5"
                    />
                    <p className="text-primary font-semibold uppercase text-xs lg:text-[16px]">
                        #{id}
                    </p>
                    <p>-</p>
                    <p className="text-xs lg:text-[16px]">Envío Express</p>
                </div>
                <button className="capitalize bg-gray-100 text-gray-500 rounded-lg px-2 py-1 text-xs lg:text-[16px]">
                    {status}
                </button>
            </div>
            <div className="border-b-2 pt-4 border-dashed border-gray-100"></div>
            <div className="flex justify-between pt-4">
                <div className="flex">
                    <div className="flex justify-center w-[120px] h-[120px]">
                        <img
                            src="https://larifamos-redesign.web.app/assets/computer-nobg-uorLI1XZ.png"
                            className="w-auto min-h-[100px]"
                            alt="computer"
                        />
                    </div>
                    <div className="mt-3 space-y-1">
                        <p className="pb-1 text-xs sm:text-[16px]">
                            {productName}
                        </p>
                        <p className="text-gray-400 font-normal text-sm">
                            1x ${price}
                        </p>
                        <p className="hidden lg:flex text-gray-400 font-normal text-sm">
                            x1 Otro Producto
                        </p>
                    </div>
                </div>
                <div className="pt-4">
                    <p className="text-xl lg:text-2xl font-normal">${price}</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-x-1">
                <div>
                    <p className="flex text-gray-400 font-normal text-sm space-x-1">
                        <span className="hidden lg:flex">Orden</span>
                        <span>Iniciada</span>
                    </p>
                    <p className="truncate flex space-x-0.5">26 Sep 2023</p>
                </div>
                <div>
                    <p className="text-gray-400 font-normal text-sm">Cliente</p>
                    <p className="truncate">{customerName}</p>
                </div>
                <div>
                    <p className="text-gray-400 font-normal text-sm">Pago</p>
                    <p className="capitalize truncate">
                        {payMethod === "card" ? "Tarjeta" : "Efectivo"}
                    </p>
                </div>
            </div>
        </div>
    );
};
