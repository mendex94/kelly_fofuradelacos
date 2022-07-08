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
        const lacos = await api.get('/catalogo/lacos')
        const destaques = await api.get('/catalogo/destaques')
        const colecaoparis = await api.get('/catalogo/colecaoparis')
        const tiaras = await api.get('/catalogo/tiaras')
        const acessorios = await api.get('/catalogo/acessorios')
        return {
            lacos: lacos.data,
            destaques: destaques.data,
            colecaoparis: colecaoparis.data,
            tiaras: tiaras.data,
            acessorios: acessorios.data    
        }
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
            state.status= 'fulfilled'
            state.lacoList = action.payload.lacos
            state.destaquesList = action.payload.destaques
            state.colecaoparisList = action.payload.colecaoparis
            state.tiarasList = action.payload.tiaras
            state.acessoriosList = action.payload.acessorios
        },
        [productsFetch.rejected]: (state: productsInitialState) => {
            state.status= 'rejected'
        }
    }
})

export default productsSlice.reducer