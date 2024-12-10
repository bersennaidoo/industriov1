import { Storer } from "../../interfaces/storer";
import { Order } from "../../models/OrderModel/order"

export class StoreService implements Storer {

    orders: Order[]

    constructor(orders: Order[]) {
        this.orders = orders
    }

    public createOrder(order: Order): { success: boolean } | { success: boolean, error: string, valid: boolean} {

        this.orders.push(order)

        return { success: true}
    }

    public deleteOrders() {

        this.orders = []
    }

    public deleteOrder(id: number) {

        this.orders = this.orders.filter((order) => order.id !== id)
    }

    public editOrder(id: number, editOrder: Order): { success: boolean, order: Order} | { success: boolean, error: string, valid: boolean } {
        this.orders = this.orders.map((order) => (order.id === id ? {
            ...order,
            items: editOrder.items,
            name: editOrder.name,
            phone: editOrder.phone,
            zipCode: editOrder.zipCode,
        }: order ))

        return { success: true, order: this.orders.find((order) => order.id === id) as Order }
    }

    public getOrders(): Order[] {
        return this.orders
    }
}