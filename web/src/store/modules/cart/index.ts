import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CartState } from '../../../@types/cart'
import { Product } from '../../../@types/products'
import { toast } from 'react-toastify'
import axios from 'axios'

const initialState: CartState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') || '[]') : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    checkoutItems: [],
    checkoutStatus: null
}

const api = axios.create({
    baseURL: 'http://localhost:4000'
})

export const checkoutFetch: any = createAsyncThunk(
    "cart/checkoutFetch",
    async (order: any) => {
        const checkout = await api.post('/pedido', order)
        return checkout.data
    }
)

const filterInt = function (value: string) {
    if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
      return Number(value);
    return NaN;
  }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item: Product) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
                toast(`+1 ${state.cartItems[itemIndex].description} adicionado ao carrinho!`, {
                    position: 'top-center'
                })
            } else {
                const tempProduct: Product[] = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
                toast(`${action.payload.description} adicionado ao carrinho!`, {
                    position: 'top-center'
                })
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        removeFromCart(state, action) {
            const newCartItems = state.cartItems.filter((item: Product) => item.id !== action.payload.id)
            state.cartItems = newCartItems
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            toast('Item removido do carrinho!', {
                position: 'top-center'
            })
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
            const oldProducts = state.cartItems.map((product: Product) => (
                {
                    id_product: product.id,
                    id_product_size: null,
                    id_product_color: null,
                    id_product_material: null,
                    amount: product.cartQuantity,
                    unit_value: filterInt(product.price),
                    percentage_discount: null
                }
            ))
            state.checkoutItems = [...oldProducts]
        }
    },
    extraReducers: {
        [checkoutFetch.pending]: (state: CartState) => {
            state.checkoutStatus = 'pending'
        },
        [checkoutFetch.fulfilled]: (state: CartState) => {
            state.checkoutStatus= 'fulfilled'
        },
        [checkoutFetch.rejected]: (state: CartState) => {
            state.checkoutStatus= 'rejected'
        }
    }
})

export const { addToCart, removeFromCart, decreaseCartQuantity, getTotals } = cartSlice.actions

export default cartSlice.reducer