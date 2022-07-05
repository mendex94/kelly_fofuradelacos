import axios from 'axios'
import { Product } from '../@types/products'

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export const renderLacos = ():Promise<Product[]> => {
    return api.get<Product[]>('/lacos').then(response => response.data)    
}