import {useEffect, useState} from "react";
import logo from "../../assets/logo.webp";
import {Link, useLocation} from "react-router-dom";
import {SideBar} from "../SideBar/SideBar";

export const Header = () => {
    const [showSideBar, setShowSideBar] = useState(false);
    const [lightHover, setLightHover] = useState(false);

    const {pathname} = useLocation();

    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        if (pathname !== "/") setLightHover(true);
    }, [pathname]);

    return (
        <header
            className={`relative h-[80px] px-4 ${
                pathname === "/"
                    ? "sm:border-b border-gray-500"
                    : "border-b-2 sm:border-b border-gray-200 sm:border-gray-500"
            } `}
        >
            <SideBar
                showSideBar={showSideBar}
                setShowSideBar={setShowSideBar}
                pathname={pathname}
            />
            <div className="h-full w-full flex items-center justify-between">
                <div className="flex items-center space-x-16">
                    <Link to="/" className="flex items-center space-x-2">
                        <img src={logo} alt="logo" className="h-[40px]" />
                        <h1 className="font-extrabold text-2xl">SoyDelivery</h1>
                    </Link>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2 flex md:hidden"
                    onClick={() => setShowSideBar(!showSideBar)}
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                </svg>
                <ul className="hidden md:flex items-center space-x-4">
                    <li>
                        <Link
                            to="/"
                            className={`text-sm cursor-pointer flex items-center space-x-0  ${
                                lightHover
                                    ? "hover:text-gray-500"
                                    : "hover:text-gray-200"
                            } ${
                                pathname === "/"
                                    ? "text-orange-600 hover:text-orange-600"
                                    : ""
                            }`}
                        >
                            {pathname === "/" && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="icon icon-tabler icons-tabler-filled icon-tabler-point pt-0.5"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                                </svg>
                            )}
                            <span>Inicio</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/sobre-nosotros"
                            className={`${
                                lightHover
                                    ? "hover:text-gray-500"
                                    : "hover:text-gray-200"
                            } ${
                                pathname === "/sobre-nosotros"
                                    ? "text-orange-600 hover:text-orange-600"
                                    : ""
                            } text-sm  cursor-pointer flex items-center space-x-0`}
                        >
                            {pathname === "/sobre-nosotros" && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="icon icon-tabler icons-tabler-filled icon-tabler-point pt-0.5"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                                </svg>
                            )}
                            <span>Sobre nosotros</span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/servicios"
                            className={`${
                                lightHover
                                    ? "hover:text-gray-500"
                                    : "hover:text-gray-200"
                            } ${
                                pathname === "/servicios"
                                    ? "text-orange-600 hover:text-orange-600"
                                    : ""
                            }
                          text-sm  cursor-pointer flex items-center space-x-0`}
                        >
                            {pathname === "/servicios" && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="icon icon-tabler icons-tabler-filled icon-tabler-point pt-0.5"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                                </svg>
                            )}
                            <span>Servicios</span>
                        </Link>
                    </li>
                    <li
                        className={`${
                            lightHover
                                ? "hover:text-gray-500"
                                : "hover:text-gray-200"
                        } text-sm  cursor-pointer flex items-center space-x-0`}
                    >
                        <div class="relative inline-block text-left">
                            <div>
                                <button
                                    onClick={() =>
                                        setShowDropdown(!showDropdown)
                                    }
                                    type="button"
                                    class="inline-flex w-full justify-center gap-x-0.5 text-sm"
                                    id="menu-button"
                                >
                                    Contactanos
                                    <svg
                                        class="-mr-1 h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div
                                class={`absolute right-0 ${
                                    showDropdown ? "z-10" : "-z-10"
                                } mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                                role="menu"
                            >
                                <div class="1" role="none">
                                    <a
                                        href="#"
                                        class="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-100 rounded-xl"
                                        role="menuitem"
                                        tabindex="-1"
                                        id="menu-item-0"
                                    >
                                        Cotizar tus servicios
                                    </a>
                                    <a
                                        href="#"
                                        class="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-100 rounded-xl"
                                        role="menuitem"
                                        tabindex="-1"
                                        id="menu-item-1"
                                    >
                                        Trabaja con nosotros
                                    </a>
                                    <a
                                        href="#"
                                        class="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-100 rounded-xl"
                                        role="menuitem"
                                        tabindex="-1"
                                        id="menu-item-2"
                                    >
                                        Quiero ser chofer
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
};
