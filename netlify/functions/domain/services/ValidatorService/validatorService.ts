import { Validator } from "../../interfaces/validator"
import { Order } from "../../models/OrderModel/order"

export class ValidatorService implements Validator {
    
    public validateOrder(order: Order): { valid: boolean } | { error: string; valid: boolean } {
        if (!order) {
            return { error: 'Missing body', valid: false };
          }
          if (typeof order.name !== 'string' || !order.name.trim()) {
            return { error: 'Invalid Name', valid: false };
          }
          if (!order.zipCode || !/^[0-9]{5}$/i.test(order.zipCode)) {
            return { error: 'Invalid Zip Code', valid: false };
          }
          if (order.zipCode === '99999') {
            return { error: "We don't ship to 99999.", valid: false };
          }
          if (!Array.isArray(order.items) || order.items.length === 0) {
            return { error: 'You must order at least one item.', valid: false };
          }
        return { valid: true}
    }
}