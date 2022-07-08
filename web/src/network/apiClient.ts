import axios from 'axios'
import { Product } from '../@types/products'
import { Contact } from '../@types/contact'

const api = axios.create({
    baseURL: 'http://localhost:4000'
})

export const renderLacos = ():Promise<Product[]> => {
    return api.get<Product[]>('/catalogo/lacos').then(response => response.data)    
}
export const renderDestaques = ():Promise<Product[]> => {
    return api.get<Product[]>('/catalogo/destaques').then(response => response.data)    
}
export const renderColecaoParis = ():Promise<Product[]> => {
    return api.get<Product[]>('/catalogo/colecaoparis').then(response => response.data)    
}
export const renderTiaras = ():Promise<Product[]> => {
    return api.get<Product[]>('/catalogo/tiaras').then(response => response.data)    
}
export const renderAcessorios = ():Promise<Product[]> => {
    return api.get<Product[]>('/catalogo/acessorios').then(response => response.data)    
}

export const postContact = async (contact: Omit<Contact, 'id'>): Promise<Contact> => {
    try {
        const response = await api.post("/personalizado", contact)
        return response.data
    } catch (error) {
        return error as unknown as Contact;
    }
}