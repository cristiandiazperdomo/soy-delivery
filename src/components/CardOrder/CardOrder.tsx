import React from "react";

export const CardOrder = () => {
    return (
        <div className="border p-4 rounded-lg">
            <div className="flex justify-between font-normal text-sm">
                <div className="flex items-center space-x-2 text-gray-500">
                    <input
                        type="checkbox"
                        name="checkbox"
                        className="w-5 h-5"
                    />
                    <p className="text-primary font-semibold">#7X42VC</p>
                    <p>-</p>
                    <p className="">Envío Express</p>
                </div>
                <button className="bg-gray-100 text-gray-500 rounded-lg px-2 py-1">
                    Cancelado
                </button>
            </div>
            <div className="border-b-2 pt-4 border-dashed border-gray-100"></div>
            <div className="flex justify-between pt-4">
                <div className="flex">
                    <div className="flex justify-center w-[120px] h-[120px]">
                        <img
                            src="https://larifamos-redesign.web.app/assets/computer-nobg-uorLI1XZ.png"
                            className="w-[100px] h-[100px]"
                            alt="computer"
                        />
                    </div>
                    <div className="mt-3 space-y-1">
                        <p className="pb-1">M1 Apple 1.0 Pro</p>
                        <p className="text-gray-400 font-normal text-sm">
                            1x $128.00
                        </p>
                        <p className="text-gray-400 font-normal text-sm">
                            x1 Otro Producto
                        </p>
                    </div>
                </div>
                <div className="pt-4">
                    <p className="text-2xl font-normal">$183.00</p>
                </div>
            </div>
            <div className="grid grid-cols-3">
                <div>
                    <p className="text-gray-400 font-normal text-sm">
                        Orden iniciada
                    </p>
                    <p>26 septiembre 2023</p>
                </div>
                <div>
                    <p className="text-gray-400 font-normal text-sm">Cliente</p>
                    <p>Cristian Díaz</p>
                </div>
                <div>
                    <p className="text-gray-400 font-normal text-sm">Pago</p>
                    <p>Mercado Pago</p>
                </div>
            </div>
        </div>
    );
};
