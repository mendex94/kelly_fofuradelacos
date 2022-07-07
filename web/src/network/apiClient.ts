import { BatterySaverOutlined } from '@mui/icons-material'
import axios from 'axios'
import { Product } from '../@types/products'
import { Contact } from '../@types/contact'

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export const renderLacos = ():Promise<Product[]> => {
    return api.get<Product[]>('/lacos').then(response => response.data)    
}

export const postContact = async (contact: Omit<Contact, 'id'>): Promise<Contact> => {
    try {
        return await api.post("/personalize", contact)
    } catch (error) {
        return error as unknown as Contact;
    }
}