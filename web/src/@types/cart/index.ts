import { Product } from "../products";

export interface CartState {
    cartItems: [] | Product[] | any,
    cartTotalQuantity: number,
    cartTotalAmount: number,
}