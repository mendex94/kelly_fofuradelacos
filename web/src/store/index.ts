import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './modules/cart'

const store = configureStore({
    reducer: {
        cart: cartReducer
    },
})

export type RootStore = ReturnType<typeof store.getState>

export default store