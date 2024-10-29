import React, {
    Dispatch,
    FormEventHandler,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import {UserDropdown} from "../UserDropdown/UserDropdown";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxTypes";
import {findOrderById} from "../../redux/actions/search";
import {DashboardSideBar} from "../DashboardSideBar/DashboardSideBar";
import {getUserFromTokenAction} from "../../redux/actions/userInfo";
import {useNavigate} from "react-router-dom";

interface DashboardHeaderProps {
    setShowTrackOrder: Dispatch<SetStateAction<boolean>>;
}

export const DashboardHeader = ({setShowTrackOrder}: DashboardHeaderProps) => {
    const [showSideBar, setShowSideBar] = useState(true);
    const [searchValue, setSearchValue] = useState("");

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    let email = useAppSelector((state) => state.user?.info?.data.email);

    const search: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        dispatch(
            findOrderById(searchValue.replace("#", ""), setShowTrackOrder)
        );
    };

    useEffect(() => {
        const token = localStorage.getItem("sd_token");

        if (token && !email) {
            dispatch(getUserFromTokenAction(token, navigate));
        }
    }, []);

    return (
        <>
            <DashboardSideBar
                showSideBar={showSideBar}
                setShowSideBar={setShowSideBar}
            />
            <header className="min-w-full max-w-full h-[100px]">
                <div className="flex justify-between items-center px-3 h-full border-b-2 border-gray-100 space-x-4 sm:space-x-0">
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
                                    onChange={(e) =>
                                        setSearchValue(e.target.value)
                                    }
                                    className="border-2 border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary outline-none block w-full ps-10 p-2.5"
                                    placeholder="#7X42VC"
                                    required
                                />
                            </div>
                        </form>
                    </div>
                    <div className="flex items-center text-gray-400 space-x-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2 flex lg:hidden w-7 h-7"
                            onClick={() => setShowSideBar(!showSideBar)}
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 6l16 0" />
                            <path d="M4 12l16 0" />
                            <path d="M4 18l16 0" />
                        </svg>
                        <div className="hover:text-gray-800">
                            <UserDropdown email={email} />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
