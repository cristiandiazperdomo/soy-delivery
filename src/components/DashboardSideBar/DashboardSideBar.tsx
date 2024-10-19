import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";

import logo from "../../assets/logo.webp";

export const DashboardSideBar = () => {
    const [isSideBarActive, setIsSideBarActive] = useState(true);

    const {pathname} = useLocation();

    return (
        <aside
            id="cta-button-sidebar"
            className={`text-gray-800 absolute sm:fixed top-0 left-0 z-40 w-64 bottom-0 transition-transform duration-500 border-r-2 border-gray-100 ${
                isSideBarActive ? "translate-x-0" : "-translate-x-full"
            }`}
            aria-label="Sidebar"
        >
            <div className="flex flex-col h-screen w-full px-3 overflow-y-auto bg-gradient-to-b from-gray-50 via-gray-50 to-transparent">
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
                        onClick={() => setIsSideBarActive(!isSideBarActive)}
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-arrow-bar-left text-gray-500 hover:text-gray-900 cursor-pointer transition-all duration-150 sm:hidden"
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
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
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
                    <li>
                        <Link
                            to="/grouplessons"
                            className={`flex items-center p-2 rounded-lg ${
                                pathname.includes("grouplesson")
                                    ? "bg-primary text-white"
                                    : "hover:bg-gray-100 text-gray-500 group-hover:text-gray-900"
                            }  group`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="transition-all duration-150 icon icon-tabler icon-tabler-sword w-7 h-7 text-gray-500 group-hover:text-red-600"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M20 4v5l-9 7l-4 4l-3 -3l4 -4l7 -9z" />
                                <path d="M6.5 11.5l6 6" />
                            </svg>
                            <span className="flex-1 ms-2.5 whitespace-nowrap hover:text-red-600">
                                Warzone
                            </span>
                        </Link>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-gray-500 rounded-lg hover:bg-yellow-100 group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-stars transition-all duration-150 icon icon-tabler icon-tabler-settings-filled flex-shrink-0 w-7 h-7 text-gray-500 group-hover:text-yellow-500"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M17.8 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                                <path d="M6.2 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                                <path d="M12 9.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                            </svg>
                            <span className="flex-1 ms-2.5 whitespace-nowrap">
                                Leaderboard
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};
