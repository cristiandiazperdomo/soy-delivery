import React from "react";
import {Link, useLocation} from "react-router-dom";

import logo from "../../assets/logo.webp";

interface DashboardSideBarProps {
    showSideBar: boolean;
    setShowSideBar: (value: boolean) => void;
}

export const DashboardSideBar = ({
    showSideBar,
    setShowSideBar,
}: DashboardSideBarProps) => {
    const {pathname} = useLocation();

    return (
        <aside
            id="cta-button-sidebar"
            className={`flex flex-col justify-between text-gray-800 fixed top-0 left-0 z-50 w-64 bottom-0 transition-transform duration-500 border-r-2 border-gray-100 bg-gray-50 pb-8 px-4 h-full ${
                showSideBar ? "translate-x-0" : "-translate-x-full"
            }`}
            aria-label="Sidebar"
        >
            <div className="flex flex-col h-screen w-full overflow-y-auto">
                <div className="space-x-4 flex justify-between self-start items-center">
                    <div className="flex items-center space-x-16 h-[100px]">
                        <Link to="/" className="flex items-center space-x-2">
                            <img src={logo} alt="logo" className="h-[40px]" />
                            <h1 className="font-extrabold text-2xl">
                                SoyDelivery
                            </h1>
                        </Link>
                    </div>
                    <svg
                        onClick={() => setShowSideBar(false)}
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-arrow-bar-left text-gray-500 hover:text-gray-900 cursor-pointer transition-all duration-150 lg:hidden"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 12l10 0" />
                        <path d="M4 12l4 4" />
                        <path d="M4 12l4 -4" />
                        <path d="M20 4l0 16" />
                    </svg>
                </div>
                <ul className="space-y-2 min-w-[200px] bg-gray-20 mt-4">
                    <li>
                        <Link
                            to="/dashboard"
                            className={`flex items-center p-2 text-gray-900 rounded-lg ${
                                pathname.includes("dashboard")
                                    ? "text-primary"
                                    : "hover:bg-gray-100 text-gray-500 group-hover:text-gray-900"
                            }  group`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-package flex-shrink-0 w-7 h-7"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
                                <path d="M12 12l8 -4.5" />
                                <path d="M12 12l0 9" />
                                <path d="M12 12l-8 -4.5" />
                                <path d="M16 5.25l-8 4.5" />
                            </svg>
                            <span className="ms-2.5">Paquetes</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <button className="flex py-2 px-3 border-2 border-gray-200 rounded-lg text-gray-400 hover:text-gray-700 hover:border-gray-700 w-full">
                    <div className="pr-2">
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-door-enter text-gray-"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M13 12v.01" />
                            <path d="M3 21h18" />
                            <path d="M5 21v-16a2 2 0 0 1 2 -2h6m4 10.5v7.5" />
                            <path d="M21 7h-7m3 -3l-3 3l3 3" />
                        </svg>
                    </div>
                    <p>Cerrar Sesión</p>
                </button>
            </div>
        </aside>
    );
};
