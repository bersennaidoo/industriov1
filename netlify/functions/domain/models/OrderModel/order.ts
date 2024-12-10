import { Item } from "../ItemModel/item"

export type Order = {
    id: number
    name: string
    phone: string
    zipCode: string
    items: Item[]
}