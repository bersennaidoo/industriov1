import { Order } from "../models/OrderModel/order"

export interface Storer {
    createOrder: (order: Order) => { success: boolean } | { success: boolean, error: string, valid: boolean}
    deleteOrders: () => void
    deleteOrder: (id: number) => void
    editOrder: (id: number, editOrder: Order) => { success: boolean } | { success: boolean, error: string, valid: boolean }
    getOrders: () => Order[]
}