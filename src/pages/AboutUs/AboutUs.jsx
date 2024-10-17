import {Footer} from "../../components/Footer/Footer";
import {Header} from "../../components/Header/Header";
import {TrustUs} from "../../components/TrustUs/TrustUs";

import {Testimonies} from "../../components/Testimonies/Testimonies";
import {Link} from "react-router-dom";

export const AboutUs = () => {
    return (
        <div className="relative text-gray-800">
            <div className="relative">
                <main className="top-0 w-full h-full bg-gray-50 py-4 md:py-12">
                    <div className="w-full h-full flex flex-col md:flex-row justify-between pt-[60px] sm:pt-[80px] space-y-8 xl:space-y-0 px-4">
                        <div className="sm:mx-8 space-y-8 xl:space-y-32">
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-12">
                                <div className="w-full h-full space-y-8 mt-0 xl:mt-12 2xl:mt-20">
                                    <span className="hidden lg:inline border-2 border-orange-500 rounded-xl w-full px-4 font-semibold py-2 text-xs xl:text-sm text-orange-600 ">
                                        IMPULSANDO EL COMERCIO
                                    </span>
                                    <p className="w-full text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
                                        Nuestro compromiso es llevar tus pedidos
                                        de manera rápida y segura, contribuyendo
                                        al crecimiento de tu negocio.
                                    </p>
                                    <button className="bg-gray-200 hover:bg-gray-300 p-3 lg:p-4 rounded-full font-bold text-sm">
                                        Contactanos
                                    </button>
                                </div>
                                <img
                                    src="https://web.soydeliveryglobal.com/wp-content/uploads/2023/12/MG_9293-1024x575.jpg"
                                    className="-order-1 md:order-1 w-full xl:w-[600px] h-[200px] xl:h-[400px] rounded-3xl mt-8 xl:mt-12 2xl:mt-16 object-cover"
                                />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center xl:justify-items-start space-y-8 lg:space-0">
                                <div className="text-center mt-0 lg:mt-8 xl:mt-0 lg:text-left flex flex-row lg:flex-col xl:flex-row items-center space-x-2 lg:space-x-0 lg:space-y-2 xl:space-y-0 xl:space-x-6">
                                    <div className="">
                                        <div className="font-bold flex item-baseline text-xl sm:text-3xl 2xl:text-4xl">
                                            <p>+</p>
                                            <p>3millones</p>
                                        </div>
                                        <p className="text-md xl:text-lg text-gray-500">
                                            Entregas
                                        </p>
                                    </div>
                                    <div className="border-b-2 xl:border-b-0 xl:border-l-2 border-gray-200 xl:h-12"></div>
                                    <div className="">
                                        <div className="font-bold flex item-baseline text-xl sm:text-3xl 2xl:text-4xl">
                                            <p>+</p>
                                            <p>4millones</p>
                                        </div>
                                        <p className="text-md xl:text-lg text-gray-500">
                                            Transacciones
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-500">
                                    Somos una solución innovadora que conecta
                                    personas y empresas a través de un servicio
                                    de entrega confiable y eficiente. Con
                                    presencia en varios países, nos enfocamos en
                                    ofrecer una experiencia fluida para nuestros
                                    clientes, priorizando la tecnología y la
                                    atención al detalle para garantizar el éxito
                                    de cada envío.
                                </p>
                            </div>
                        </div>
                        {/* <div className="flex sm:hidden border-b-2 border-gray-200 w-52 mx-auto"></div> */}
                        <div className="h-full w-full sm:min-w-[400px] 2xl:min-w-[500px] bg-white p-4 pb-6 pt-2 rounded-3xl shadow-sm">
                            <div className="flex items-center justify-between py-2 px-4 sm:px-8">
                                <h2 className="font-semibold text-sm sm:text-xl">
                                    Recomendado
                                </h2>
                                <p className="flex items-center space-x-1.5 text-xs hover:text-gray-500 cursor-pointer">
                                    <span className="font-semibold">
                                        Ver todo
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right text-gray-500"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M9 6l6 6l-6 6" />
                                    </svg>
                                </p>
                            </div>
                            <div className="relative space-y-4 mb-8">
                                <img
                                    src="https://imgs.elpais.com.uy/dims4/default/1ad07a0/2147483647/strip/true/crop/2561x1761+87+0/resize/1440x990!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fuploads%2F2020%2F06%2F25%2F5ef56309d9025.jpeg"
                                    alt="CEO de SoyDelivery"
                                    className="w-full sm:w-[580px] rounded-3xl"
                                />
                                <div className="absolute bottom-0 text-white px-4 pb-6 bg-gradient-to-t from-orange-700 to-transparent w-full rounded-3xl">
                                    <div className="flex space-x-2 text-xs mb-4">
                                        <p className="font-semibold">
                                            Negocios
                                        </p>
                                    </div>
                                    <p className="text-xs sm:text-sm w-full leading-tight">
                                        El emprendimiento de un inquieto que
                                        busca conquistar la última milla en
                                        Uruguay y el mundo
                                    </p>
                                </div>
                                <Link
                                    target="_blank"
                                    to="https://www.linkedin.com/in/cristian-d%C3%ADaz-390971222/"
                                    className="transition-all duration-200 opacity-0 hover:opacity-100 absolute bottom-0 text-white flex items-center justify-center bg-black bg-opacity-50 h-full w-full rounded-3xl cursor-pointer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-external-link"
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
                                </Link>
                            </div>
                            <div className="h-full space-y-4 px-4">
                                {[
                                    {
                                        url: "https://soydelivery.com.uy/web/img/conocenos/fr3.png",
                                        title: `El equipo
                                                participó en "Uruguay al Cubo"
                                                de Itaú en San Pablo, donde nos
                                                capacitamos y compartimos
                                                experiencias.`,
                                    },
                                    {
                                        url: "https://imgs.elpais.com.uy/dims4/default/dd83187/2147483647/strip/true/crop/1719x1182+0+0/resize/1440x990!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.us-east-1.amazonaws.com%2Fbrightspot%2F2c%2Fb3%2F936901eb4ccbab6f4d8d8c66532b%2F1.JPG",
                                        title: `A inicios 2019 comenzó el camino de internacionalización con la apertura de las franquicias en Paraguay y en Bolivia.`,
                                    },
                                    {
                                        url: "https://imgs.elpais.com.uy/dims4/default/fc7ec53/2147483647/strip/true/crop/1939x1333+61+0/resize/1440x990!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.us-east-1.amazonaws.com%2Fbrightspot%2F8a%2F59%2Fec6f0a394ef6ab776880657b6f56%2Fimagen-nia1880.jpg",
                                        title: `SoyDelivery otorga equipamiento y formación adecuada en seguridad y salud laboral, y el diseño de un protocolo específico`,
                                    },
                                ].map((el) => (
                                    <div className="min-h-[100px] flex flex-col-reverse sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pb-2">
                                        <div className="space-y-2 sm:space-y-4 mt-2 sm:mt-0">
                                            <div className="flex space-x-2 text-gray-500 text-xs">
                                                <p className="text-orange-500 font-semibold">
                                                    Equipo
                                                </p>
                                                <p className="text-gray-600">
                                                    |
                                                </p>
                                                <p className="text-xs">
                                                    6 minutos de lectura
                                                </p>
                                            </div>
                                            <p className="text-sm font-bold leading-tight">
                                                {el.title}
                                            </p>
                                        </div>
                                        <img
                                            src={el.url}
                                            className="w-full sm:w-[100px] h-[100px] object-cover rounded-xl"
                                            alt="team"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div className="flex flex-col justify-between absolute top-0 left-0 right-0 container mx-auto">
                <Header />
            </div>
            <div className="bg-gray-50 flex flex-col items-center">
                <div className="text-xl text-gray-400 py-12 lg:py-20">
                    <TrustUs />
                </div>
            </div>
            <div class="bg-white lg:py-12">
                <div class="container mx-auto px-6">
                    <div className="flex flex-col items-center">
                        <div className="relative mt-8 lg:mt-0 py-6 lg:py-12 overflow-hidden">
                            <Testimonies />
                        </div>
                        <div className="w-full mt-6">
                            <h3 class="text-2xl font-semibold text-gray-800 mb-4">
                                Nuestro equipo
                            </h3>
                            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 text-gray-700 py-6 text-sm">
                                <a className="transition-all duration-100 hover:underline h-full w-full hover:text-gray-900 cursor-pointer">
                                    <strong>Gerencia</strong>
                                </a>
                                <a className="transition-all duration-100 hover:underline h-full w-full hover:text-gray-900 cursor-pointer">
                                    <strong>Operaciones</strong>
                                </a>
                                <a className="transition-all duration-100 hover:underline h-full w-full hover:text-gray-900 cursor-pointer">
                                    <strong>Administración y Finanzas</strong>
                                </a>
                                <a className="transition-all duration-100 hover:underline h-full w-full hover:text-gray-900 cursor-pointer">
                                    <strong>Comercial</strong>
                                </a>
                                <a className="transition-all duration-100 hover:underline h-full w-full hover:text-gray-900 cursor-pointer">
                                    <strong>Tecnología</strong>
                                </a>
                                <a className="transition-all duration-100 hover:underline h-full w-full hover:text-gray-900 cursor-pointer">
                                    <strong>Innovación Logística</strong>
                                </a>
                                <a className="transition-all duration-100 hover:underline h-full w-full hover:text-gray-900 cursor-pointer">
                                    <strong>Análisis de Datos</strong>
                                </a>
                                <a className="transition-all duration-100 hover:underline h-full w-full hover:text-gray-900 cursor-pointer">
                                    <strong>Atención al Cliente</strong>
                                </a>
                                <a className="transition-all duration-100 hover:underline h-full w-full hover:text-gray-900 cursor-pointer">
                                    <strong>Flota</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
