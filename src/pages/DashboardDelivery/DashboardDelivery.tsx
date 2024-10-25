import React, {useEffect, useState} from "react";
import {DashboardSideBar} from "../../components/DashboardSideBar/DashboardSideBar";
import {CardOrder} from "../../components/CardOrder/CardOrder";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxTypes";
import {getOrders} from "../../redux/actions/orders";
import {DashboardHeader} from "../../components/DashboardHeader/DashboardHeader";
import {TrackOrder} from "../TrackOrder/TrackOrder";
import {Loader} from "../../components/Loader/Loader";

export const DashboardDelivery = () => {
    const [status, setStatus] = useState("all");
    const [showTrackOrder, setShowTrackOrder] = useState(false);

    const dispatch = useAppDispatch();
    const orders = useAppSelector((state) => state.orders);

    useEffect(() => {
        dispatch(getOrders(status));
    }, [status]);

    return (
        <div className="relative flex font-semibold text-gray-700">
            <Loader />
            <DashboardSideBar />
            <div className="relative flex flex-col w-full pl-[257px]">
                <DashboardHeader setShowTrackOrder={setShowTrackOrder} />
                <div className="h-screen w-full space-y-8 px-4 mb-96">
                    <div className="pt-10">
                        <h2 className="text-3xl">Estados de Entregas</h2>
                        <div className="flex items-center text-gray-400 mt-2">
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
                    </div>
                    <div className="grid grid-cols-4 gap-x-4">
                        {[1, 2, 3, 4].map((num) => (
                            <button
                                className="bg-primary/[5%] pt-8 pb-12 px-4 border border-primary/30 rounded-lg"
                                key={num}
                            >
                                <header>
                                    <p className="text-gray-400">
                                        Entregas hoy
                                    </p>
                                </header>
                                <div>
                                    <p className="text-3xl">127 Entregas</p>
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="">
                        <h2 className="text-3xl mb-8">Reporte de Entregas</h2>
                        <ul className="flex mb-4 border-b border-gray-200">
                            {[
                                ["Todas las entregas", "all"],
                                ["Entrega en progreso", "in progress"],
                                ["Exitosa", "delivered"],
                                ["Entrega en espera", "waiting"],
                                ["Entrega cancelada", "cancelled"],
                                ["Reembolso / Reportado", "refund-reported"],
                            ].map((availableStatus) => (
                                <p
                                    key={availableStatus[0]}
                                    className={`${
                                        availableStatus[1] === status
                                            ? "border-b-4 border-primary"
                                            : "hover:text-gray-400 cursor-pointer"
                                    } px-6 pb-4`}
                                    onClick={() =>
                                        setStatus(availableStatus[1])
                                    }
                                >
                                    {availableStatus[0]}
                                </p>
                            ))}
                        </ul>
                        <div className="grid grid-cols-3 gap-8 mt-8">
                            {orders.map((order: any) => (
                                <CardOrder
                                    key={order.id}
                                    id={order.id}
                                    productName={order.productName}
                                    customerId={order.customerId}
                                    providerId={order.providerId}
                                    driverId={order.driverId}
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
