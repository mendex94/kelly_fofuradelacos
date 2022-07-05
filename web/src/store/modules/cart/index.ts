import { createSlice } from '@reduxjs/toolkit'
import { CartState } from '../../../@types/cart'
import { Product } from '../../../@types/products'
import { toast } from 'react-toastify'

const initialState: CartState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') || '[]') : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item: Product) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
            } else {
                const tempProduct: Product[] = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
                toast.success('Produto adicionado ao carrinho!', {
                    position: 'top-center'
                })
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        removeFromCart(state, action) {
            const newCartItems = state.cartItems.filter((item: Product) => item.id !== action.payload.id)
            state.cartItems = newCartItems
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        decreaseCartQuantity(state, action) {
            const itemIndex = state.cartItems.findIndex((item: Product) => item.id === action.payload.id)
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const newCartItems = state.cartItems.filter((item: Product) => item.id !== action.payload.id)
                state.cartItems = newCartItems
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        getTotals(state) {
            let { total, quantity } = state.cartItems.reduce((cartTotal: any, cartItem: Product) =>{
                const { cartQuantity, price } = cartItem
                const itemTotal = +price * cartQuantity
                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity
                return cartTotal
            }, {
                total: 0,
                quantity: 0,
            })
            state.cartTotalQuantity = quantity
            state.cartTotalAmount = total
        }
    }
})

export const { addToCart, removeFromCart, decreaseCartQuantity, getTotals } = cartSlice.actions

export default cartSlice.reducer