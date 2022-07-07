import { BatterySaverOutlined } from '@mui/icons-material'
import axios from 'axios'
import { Product } from '../@types/products'
import { Contact } from '../@types/contact'

const api = axios.create({
    baseURL: 'http://localhost:4000'
})

export const renderLacos = ():Promise<Product[]> => {
    return api.get<Product[]>('/lacos').then(response => response.data)    
}

export const postContact = async (contact: Omit<Contact, 'id'>): Promise<Contact> => {
    try {
        const response = await api.post("/personalizado", contact)
        return response.data
    } catch (error) {
        return error as unknown as Contact;
    }
}