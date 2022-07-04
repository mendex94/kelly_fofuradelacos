import { Product } from "../products";

export interface CartState {
    cartItems: [] | Product[],
    cartTotalQuantity: number,
    cartTotalAmount: number,
}