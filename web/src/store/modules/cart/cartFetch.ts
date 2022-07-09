import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

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

export const shippingFetch: any = createAsyncThunk(
    "cart/shippingFetch",
    async (cep: any) => {
        const frete = await api.post('/frete', cep)
        return frete.data
    }
)