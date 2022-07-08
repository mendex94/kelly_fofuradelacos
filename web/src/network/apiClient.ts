import axios from 'axios'
import { Contact } from '../@types/contact'

const api = axios.create({
    baseURL: 'http://localhost:4000/'
})


export const postContact = async (contact: Omit<Contact, 'id'>): Promise<Contact> => {
    try {
        const response = await api.post("/personalizado", contact)
        return response.data
    } catch (error) {
        return error as unknown as Contact;
    }
}