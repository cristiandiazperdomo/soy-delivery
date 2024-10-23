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

export interface Order {
    id: string;
    productName: string;
    customerName: string;
    providerId: string;
    driverId: string;
    price: number;
    payMethod: (typeof PayMethod)[number];
    status: (typeof Status)[number];
    address: string;
}

export type OrderSearch = Pick<
    Order,
    "id" | "productName" | "address" | "price" | "status" | "payMethod"
> & {
    customerName: string;
    providerName: string;
    driverName: string;
};
