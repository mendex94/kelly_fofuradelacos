import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { productsInitialState } from '../../../@types/products'


const initialState: productsInitialState = {
    lacoList: [],
    destaquesList: [],
    colecaoparisList: [],
    tiarasList: [],
    acessoriosList: [],
    status: 'iddle'
}

const api = axios.create({
    baseURL: 'http://localhost:4000'
})

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async (): Promise<any> => {
        const [
            lacos,
            destaques,
            paris,
            tiaras,
            acessorios
        ] = await Promise.all([
            api.get('/catalogo/lacos'),
            api.get('/catalogo/destaques'),
            api.get('/catalogo/colecaoparis'),
            api.get('/catalogo/tiaras'),
            api.get('/catalogo/acessorios')
        ])
        return {
            lacos: lacos.data,
            destaques: destaques.data,
            paris: paris.data,
            tiaras: tiaras.data,
            acessorios: acessorios.data
        }
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productsFetch.pending, (state, action) => {
                if (state.status === 'iddle') {
                    state.status = 'pending'
                }
            })
            .addCase(productsFetch.fulfilled, (state, action) => {
                state.lacoList = action.payload.lacos
                state.destaquesList = action.payload.destaques
                state.colecaoparisList = action.payload.paris
                state.tiarasList = action.payload.tiaras
                state.acessoriosList = action.payload.acessorios
                state.status = 'fulfilled'
            })
            .addCase(productsFetch.rejected, (state, action) => {
                state.status = 'rejected'
            })
    }
})

export default productsSlice.reducer