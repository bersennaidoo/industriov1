import { OrdersContract } from "./orders-contracts";
import { Order } from "./order";

export class Orders implements OrdersContract {

    orders: Order[] = []
    orderId: number = 1

    constructor() {}

    public validateOrder(order: Order): { valid: boolean} | { error: string, valid: boolean } {

        return { valid: true}
    }

    public createOrder(order: Order): { success: boolean; } | { success: boolean; error: string; valid: boolean; } {

        return { success: true}
    };

    public deleteOrders(): Order[] {

        return this.orders
    }

    public deleteOrder(id: number): Order[] {

        return this.orders
    }

    public editOrder(id: number, editOrder: Order): { success: boolean; order: Order; } | { success: boolean; error: string; valid: boolean; } {

        return { success: true, order: {id: 0, name: "", phone: "", zipCode: "", items: [] }}
    }

    public getOrders(): Order[] {

        return this.orders
    }
}