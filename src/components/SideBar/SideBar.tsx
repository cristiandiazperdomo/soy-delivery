import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/logo.webp";

interface SideBarProps {
    showSideBar: boolean;
    pathname: string;
}

export const SideBar = ({showSideBar, pathname}: SideBarProps) => {
    return (
        <aside
            className={`fixed top-0 left-0 z-50 w-64 text-white h-screen transition-transform ${
                showSideBar ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-zinc-900 pl-4">
                <div className="flex items-center space-x-16 text-gray-50 h-[80px]">
                    <Link to="/" className="flex items-center space-x-2">
                        <img src={logo} alt="logo" className="h-[40px]" />
                        <h1 className="font-extrabold text-2xl">SoyDelivery</h1>
                    </Link>
                </div>
                <div className="flex">
                    <ul className="flex flex-col space-y-4">
                        <li>
                            <Link
                                to="/"
                                className={`text-sm cursor-pointer flex items-center space-x-0   ${
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
                                        className="icon icon-tabler icons-tabler-filled icon-tabler-point pt-0.5"
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
                                className={` ${
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
                                        className="icon icon-tabler icons-tabler-filled icon-tabler-point pt-0.5"
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
                                className={` ${
                                    pathname === "/servicios"
                                        ? "text-orange-600 hover:text-orange-600"
                                        : ""
                                } text-sm cursor-pointer flex items-center space-x-0`}
                            >
                                {pathname === "/servicios" && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="icon icon-tabler icons-tabler-filled icon-tabler-point pt-0.5"
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
                        <li>
                            <Link
                                to="#"
                                className={`text-sm cursor-pointer flex items-center space-x-0`}
                            >
                                <span>Cotizar tus servicios</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="#"
                                className={`text-sm cursor-pointer flex items-center space-x-0`}
                            >
                                <span>Trabaja con nosotros</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className={`text-sm cursor-pointer flex items-center space-x-0`}
                            >
                                <span>Quiero ser chofer</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};
