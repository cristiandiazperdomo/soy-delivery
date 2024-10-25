import React from "react";
import {useAppSelector} from "../../hooks/reduxTypes";

export const Loader = () => {
    const isActive = useAppSelector((state) => state.loader);

    return (
        <div
            className={`items-center justify-center fixed w-full h-screen bg-black bg-opacity-50 ${
                isActive ? "flex z-50" : "hidden"
            }`}
        >
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-loader-3 animate-spin text-white"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9" />
                <path d="M17 12a5 5 0 1 0 -5 5" />
            </svg>
        </div>
    );
};
