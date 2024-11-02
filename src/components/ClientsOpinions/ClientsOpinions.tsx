import React from "react";
import person from "../../assets/profile.webp";

const reviews = [
    {
        content:
            "Soy Delivery ha transformado completamente nuestra forma de operar. Gracias a su plataforma, hemos logrado una comunicación eficiente y un sistema de entrega optimizado. ¡Totalmente recomendado!",
        clientName: "María López",
        workPosition: "Gerente de Operaciones",
    },
    {
        content:
            "Desde que implementamos Soy Delivery, hemos reducido el tiempo de espera para nuestros clientes y mejorado nuestra eficiencia. Es una herramienta indispensable en nuestro día a día.",
        clientName: "Javier Romero",
        workPosition: "Coordinador de Logística",
    },
    {
        content:
            "Soy Delivery es intuitivo y fácil de usar. Nos permite gestionar nuestros pedidos y asignaciones de una forma tan ágil que todo el equipo se ha adaptado rápidamente.",
        clientName: "Laura Martínez",
        workPosition: "Directora de Ventas",
    },
];

const rotations = [-0.1, 2, -1];

export const ClientsOpinions = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
                <div
                    key={index}
                    className="relative h-auto w-full"
                    style={{
                        transform: `rotate(${
                            rotations[index % rotations.length]
                        }deg)`,
                    }}
                >
                    <div className="border-2 rounded-md bg-gray-100 z-20 relative">
                        <div className="relative">
                            <div
                                className="border-2 rounded-md w-full h-full bg-white p-8 absolute -z-10"
                                style={{
                                    transform: `rotate(${
                                        rotations[index % rotations.length] - 2
                                    }deg)`,
                                }}
                            ></div>
                            <div className="p-8">
                                <div className="">
                                    <svg
                                        className="w-6 h-6 text-gray-800 dark:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <p className="mt-4">{review.content}</p>
                                    <div className="flex space-x-4 pt-8">
                                        <img
                                            src={person}
                                            alt="person"
                                            className="w-[48px] h-[48px] bg-primary rounded-xl"
                                        />
                                        <div>
                                            <p className="text-sm font-semibold">
                                                {review.clientName}
                                            </p>
                                            <p className="text-sm text-gray-400">
                                                {review.workPosition}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
