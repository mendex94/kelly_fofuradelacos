import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './modules/cart'
import productsReducer from './modules/products'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer
    },
})

export type RootStore = ReturnType<typeof store.getState>

export default store