import React, {useState} from "react";
import userProfile from "../../assets/profile.webp";
import {Link} from "react-router-dom";
import {Notifications} from "../Notifications/Notifications";

interface UserDropdownInterface {
    email: string | null;
}

export const UserDropdown = ({email}: UserDropdownInterface) => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="relative flex items-center z-40 space-x-2 sm:space-x-6">
            <div className="relative">
                <Notifications />
            </div>
            <div className="border border-gray-50 border-l h-[40px]"></div>
            <div className="relative">
                <button
                    id="dropdownUserAvatarButton"
                    className="flex items-center text-sm md:me-0 group"
                    type="button"
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    <div className="flex items-center bg-primary rounded-full group-focus:ring-4 group-focus:ring-gray-300 focus:ring-4 focus:ring-gray-300">
                        <span className="sr-only">Abrir menú</span>
                        <img
                            className="w-[34px] min-w-[34px] h-[34px] min-h-[34px] rounded-full"
                            src={userProfile}
                            alt="user photo"
                        />
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down w-5 h-5"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 9l6 6l6 -6" />
                    </svg>
                </button>

                <div
                    id="dropdownAvatar"
                    className={`absolute -right-2 ${
                        showDropdown ? "z-10" : "-z-10 hidden"
                    } bg-white divide-y divide-gray-100 rounded-lg shadow w-52 mt-2`}
                >
                    <div className="px-4 py-3 text-sm text-gray-900">
                        <div>{email?.substring(0, email.indexOf("@"))}</div>
                        <div className="font-medium truncate">{email}</div>
                    </div>
                    <ul className="py-2 text-sm text-gray-700">
                        <li>
                            <Link
                                to="/dashboard"
                                className="flex flex-row items-center justify-between px-4 py-3 hover:bg-gray-100 cursor-pointer"
                            >
                                <span className="block">Ordenes</span>
                                <span className="bg-red-600 flex items-center justify-center h-6 w-6 rounded-full text-white text-xs">
                                    1
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <div className="py-2">
                        <div className="px-4 py-3 hover:bg-gray-100 text-sm cursor-pointer">
                            <a href="#" className="text-black">
                                Salir
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
