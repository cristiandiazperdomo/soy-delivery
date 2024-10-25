import React, {
    Dispatch,
    FormEventHandler,
    SetStateAction,
    useState,
} from "react";
import {UserDropdown} from "../UserDropdown/UserDropdown";
import {useAppDispatch} from "../../hooks/reduxTypes";
import {findOrderById} from "../../redux/actions/search";

interface DashboardHeaderProps {
    setShowTrackOrder: Dispatch<SetStateAction<boolean>>;
}

export const DashboardHeader = ({setShowTrackOrder}: DashboardHeaderProps) => {
    const [searchValue, setSearchValue] = useState("");

    const dispatch = useAppDispatch();

    const search: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        dispatch(
            findOrderById(searchValue.replace("#", ""), setShowTrackOrder)
        );
    };

    return (
        <header className="min-w-full max-w-full h-[100px]">
            <div className="flex justify-between items-center px-3 h-full border-b-2 border-gray-100">
                <div>
                    <form
                        className="flex items-center max-w-lg mx-auto"
                        onSubmit={search}
                    >
                        <label htmlFor="voice-search" className="sr-only">
                            Buscar
                        </label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="voice-search"
                                onChange={(e) => setSearchValue(e.target.value)}
                                className="border-2 border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary outline-none block w-full ps-10 p-2.5"
                                placeholder="#7X42VC"
                                required
                            />
                        </div>
                    </form>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 ">
                    <div className="hover:text-gray-800">
                        <UserDropdown emailHeader={null} />
                    </div>
                    <button className="flex py-2 px-3 border-2 border-gray-100 rounded-lg text-gray-400 hover:text-gray-700 hover:border-gray-700">
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
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M13 12v.01" />
                                <path d="M3 21h18" />
                                <path d="M5 21v-16a2 2 0 0 1 2 -2h6m4 10.5v7.5" />
                                <path d="M21 7h-7m3 -3l-3 3l3 3" />
                            </svg>
                        </div>
                        <p>Cerrar Sesión</p>
                    </button>
                </div>
            </div>
        </header>
    );
};
