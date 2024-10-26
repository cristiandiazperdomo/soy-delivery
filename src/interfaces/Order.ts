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
    address: string;
    price: number;
    status: (typeof Status)[number];
    payMethod: (typeof PayMethod)[number];
    customerName: string;
    providerName: string;
    driverName: string;
}