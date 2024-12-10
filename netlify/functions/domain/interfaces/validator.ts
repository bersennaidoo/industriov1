import { Order } from "../models/OrderModel/order"

export interface Validator {
    validateOrder: (order: Order) => { valid: boolean} | { error: string, valid: boolean }
}