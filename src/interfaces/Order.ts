export const Status = [
    "waiting",
    "pending",
    "in progress",
    "delivered",
    "cancelled",
    "refund",
    "reported",
] as const;

export const PayMethod = ["cash", "card"] as const;

interface BaseOrder {
    id: string;
    productName: string;
    address: string;
    price: number;
    status: (typeof Status)[number];
    payMethod: (typeof PayMethod)[number];
}

export interface Order extends BaseOrder {
    customerId: string;
    providerId: string;
    driverId: string;
}

export interface OrderSearch extends BaseOrder {
    customerName: string;
    providerName: string;
    driverName: string;
};
