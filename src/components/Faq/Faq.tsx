import React, {useState} from "react";
import "./Faq.css";

const listOfCategories = ["General", "Servicios", "Pagos", "Tecnología"];

interface QuestionResponse {
    title: string;
    response: string;
}

interface FAQ {
    General: QuestionResponse[];
    "Rastreo de envíos": QuestionResponse[];
    Servicios: QuestionResponse[];
    Pagos: QuestionResponse[];
    Tecnología: QuestionResponse[];
    [key: string]: QuestionResponse[];
}

const categories: FAQ = {
    General: [
        {
            title: "¿Qué es SoyDelivery?",
            response:
                "SoyDelivery es una empresa dedicada a ofrecer soluciones logísticas de última milla, que incluyen servicios de envíos express, flota dedicada y almacenamiento.",
        },
        {
            title: "¿En qué ciudades opera SoyDelivery?",
            response:
                "SoyDelivery opera en Montevideo, Canelones, Maldonado y otras ciudades principales de Uruguay. Consulta nuestra cobertura para obtener más información.",
        },
        {
            title: "¿Qué tipo de clientes utilizan SoyDelivery?",
            response:
                "Trabajamos con una amplia gama de clientes, desde farmacias y supermercados hasta tiendas de e-commerce y otros negocios que necesitan soluciones logísticas rápidas y eficientes.",
        },
        {
            title: "¿Cómo puedo ponerme en contacto con SoyDelivery?",
            response:
                "Puedes ponerte en contacto con nosotros a través de nuestro correo electrónico comercial@soydelivery.com.uy o llamándonos directamente al número proporcionado en la sección de contacto de nuestro sitio web.",
        },
    ],
    "Rastreo de envíos": [
        {
            title: "¿Cómo puedo rastrear mi paquete?",
            response:
                "Puedes rastrear tu paquete a través de nuestra plataforma web o descargando nuestra aplicación móvil, utilizando el número de seguimiento proporcionado.",
        },
        {
            title: "¿Cuánto tiempo toma en actualizarse el estado del envío?",
            response:
                "El estado del envío se actualiza en tiempo real, pero en algunos casos puede haber un ligero retraso de hasta 30 minutos.",
        },
        {
            title: "¿Qué hago si mi envío está demorado?",
            response:
                "Si tu envío está demorado, por favor contacta a nuestro equipo de atención al cliente para recibir asistencia. Haremos todo lo posible para resolver el problema rápidamente.",
        },
    ],
    Servicios: [
        {
            title: "¿Qué servicios ofrece SoyDelivery?",
            response:
                "Ofrecemos servicios de envío en el mismo día, logística para farmacias, supermercados y empresas de e-commerce, así como flota dedicada.",
        },
        {
            title: "¿Puedo contratar flota dedicada para mi empresa?",
            response:
                "Sí, ofrecemos flota dedicada adaptada a las necesidades de tu negocio. Cotizamos el servicio según tus requerimientos específicos.",
        },
        {
            title: "¿Cómo funcionan los envíos para farmacias?",
            response:
                "Disponemos de flota especializada para farmacias, permitiendo entregas rápidas y eficientes, con la opción de pago contra entrega y seguimiento en tiempo real.",
        },
        {
            title: "¿Qué es el servicio de Fulfillment?",
            response:
                "El servicio de Fulfillment incluye almacenamiento, picking, packing, etiquetado, despacho y entrega de productos para que te enfoques en las ventas mientras nosotros nos ocupamos de la logística.",
        },
    ],
    Pagos: [
        {
            title: "¿Qué métodos de pago aceptan?",
            response:
                "Aceptamos pagos con tarjeta de crédito, transferencias bancarias y otros métodos locales dependiendo de la región.",
        },
        {
            title: "¿Puedo pagar contra entrega?",
            response:
                "Sí, en algunos servicios específicos como farmacias ofrecemos la opción de pago contra entrega.",
        },
        {
            title: "¿Cómo recibo la factura por mis envíos?",
            response:
                "Las facturas se generan automáticamente y se envían por correo electrónico una vez finalizado el servicio de envío.",
        },
    ],
    Tecnología: [
        {
            title: "¿Cómo funciona la tecnología de seguimiento de SoyDelivery?",
            response:
                "Nuestra tecnología de seguimiento permite visualizar en tiempo real la ubicación de los paquetes, con actualizaciones precisas en cada etapa del envío.",
        },
        {
            title: "¿Puedo integrar mi e-commerce con el sistema de SoyDelivery?",
            response:
                "Sí, ofrecemos integración completa con plataformas de e-commerce, lo que facilita la gestión automatizada de envíos y seguimiento de pedidos.",
        },
        {
            title: "¿Ofrecen una aplicación móvil?",
            response:
                "Sí, nuestra aplicación móvil para conductores permite una gestión eficiente de los envíos, con funcionalidades de geolocalización, actualizaciones en tiempo real y más.",
        },
    ],
};

export const Faq = () => {
    const [selectedCategory, setSelectedCategory] = useState("Tecnología");
    return (
        <div className="space-y-4 pt-8 pb-12">
            <div className="flex flex-wrap sm:flex-no-wrap justify-center space-x-4">
                {listOfCategories.map((category) => (
                    <button
                        onClick={() => setSelectedCategory(category)}
                        className={`transition-all duration-700 bg-opacity-0 p-3 rounded-xl ${
                            selectedCategory === category
                                ? "bg-gray-100 bg-opacity-100"
                                : ""
                        } `}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <ul className="">
                {categories[selectedCategory].map((cat: any) => (
                    <li className="text-black space-y-2 border-b-2">
                        <details className="border-gray-100 p-4">
                            <summary className="flex justify-between text-md">
                                <span className="text-xl font-semibold">
                                    {cat.title}
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
                            <p className="text-gray-500 mt-2 text-sm">
                                {cat.response}
                            </p>
                        </details>
                    </li>
                ))}
            </ul>
        </div>
    );
};
