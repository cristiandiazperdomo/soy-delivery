import React, {useEffect, useState} from "react";
import {CardOrder} from "../../components/CardOrder/CardOrder";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxTypes";
import {getOrders} from "../../redux/actions/orders";
import {DashboardHeader} from "../../components/DashboardHeader/DashboardHeader";
import {TrackOrder} from "../../components/TrackOrder/TrackOrder";
import {Loader} from "../../components/Loader/Loader";
import {useNavigate} from "react-router-dom";

export const DashboardDelivery = () => {
    const [status, setStatus] = useState("all");
    const [showTrackOrder, setShowTrackOrder] = useState(false);

    const dispatch = useAppDispatch();
    const orders = useAppSelector((state) => state.orders);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("sd_token");
        if (!token) {
            navigate("/entrar");
        } else {
            dispatch(getOrders(status, token));
        }
    }, [status]);

    return (
        <div className="relative flex font-semibold text-gray-700">
            <Loader />
            <div className="relative flex flex-col w-full lg:pl-[257px]">
                <DashboardHeader setShowTrackOrder={setShowTrackOrder} />
                <div className="h-screen w-full space-y-8 px-4 mb-96">
                    <div className="pt-10">
                        <h2 className="text-3xl">Reporte de Entregas</h2>
                        <div className="flex items-center text-gray-400 mt-2 mb-8">
                            <p>Inicio</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right w-4 h-4"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M9 6l6 6l-6 6" />
                            </svg>
                            <p
                                onClick={() =>
                                    setShowTrackOrder(!showTrackOrder)
                                }
                            >
                                Estados de Entregas
                            </p>
                        </div>
                        <ul className="flex relative overflow-scroll no-scrollbar mb-4 border-b border-gray-200 w-full">
                            {[
                                ["Todas las entregas", "all"],
                                ["Entrega en progreso", "in progress"],
                                ["Exitosa", "delivered"],
                                ["Entrega en espera", "waiting"],
                                ["Entrega cancelada", "cancelled"],
                                ["Reembolso / Reportado", "refund-reported"],
                            ].map((availableStatus) => (
                                <li
                                    key={availableStatus[0]}
                                    className={`${
                                        availableStatus[1] === status
                                            ? "border-b-4 border-primary"
                                            : "hover:text-gray-400 cursor-pointer"
                                    } pb-4 text-sm lg:text-[16px] min-w-[200px] w-[200px] text-center`}
                                    onClick={() =>
                                        setStatus(availableStatus[1])
                                    }
                                >
                                    {availableStatus[0]}
                                </li>
                            ))}
                        </ul>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8 mt-8">
                            {orders.map((order: any) => (
                                <CardOrder
                                    key={order.id}
                                    id={order.id}
                                    productName={order.productName}
                                    customerName={order.customerName}
                                    providerName={order.providerName}
                                    driverName={order.driverName}
                                    price={order.price}
                                    payMethod={order.payMethod}
                                    status={order.status}
                                    address={order.address}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <TrackOrder
                setShowTrackOrder={setShowTrackOrder}
                showTrackOrder={showTrackOrder}
            />
        </div>
    );
};
