import { IClient } from "../utils/clients";
import {clients} from '../../db.json';


export const getClients = async():Promise<IClient[] | undefined> => {
    
    try {
        const resp = await fetch(import.meta.env.VITE_API_URL);
        const data = await resp.json();

        return data;

    } catch (error) {
        console.log(error);
    } 
};

export const getClientById = async(id: number):Promise<IClient | undefined> => {

    try {
        const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
        const data = await resp.json();

        return data as IClient;
        
    } catch (error) {
        console.log(error);
    }

};

export const createClient = async(data:IClient):Promise<IClient | undefined> => {

    try {
        const resp = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        await resp.json();
        
    } catch (error) {
        console.log(error);
    }

    return data
};

export const updateClient = async(data:IClient, id:number):Promise<IClient | undefined> => {

    try {
        const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
       
        await resp.json();
        
    } catch (error) {
        console.log(error);
    }
    
    return data
};

export const deleteClient = async(id:number) => {

    try {
        const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE'
        });
    
        await resp.json();
        
    } catch (error) {
        console.log(error);
    }

};