import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { productsInitialState } from '../../../@types/products'

const initialState: productsInitialState = {
    lacoList: [],
    destaquesList: [],
    colecaoparisList: [],
    tiarasList: [],
    acessoriosList: [],
    status: null
}

const api = axios.create({
    baseURL: 'http://localhost:4000'
})

export const productsFetch: any = createAsyncThunk(
    "products/productsFetch",
    async () => {
        let products = await Promise.all([
             api.get('/catalogo/lacos'),
             api.get('/catalogo/destaques'),
             api.get('/catalogo/colecaoparis'),
             api.get('/catalogo/tiaras'),
             api.get('/catalogo/acessorios')
        ])
        return products     
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state: productsInitialState) => {
            state.status = 'pending'
        },
        [productsFetch.fulfilled]: (state: productsInitialState, action: any) => {
            state.lacoList = action.payload[0].data
            state.destaquesList = action.payload[1].data
            state.colecaoparisList = action.payload[2].data
            state.tiarasList = action.payload[3].data
            state.acessoriosList = action.payload[4].data
            state.status= 'fulfilled'
        },
        [productsFetch.rejected]: (state: productsInitialState) => {
            state.status= 'rejected'
        }
    }
})

export default productsSlice.reducer