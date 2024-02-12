import axios from 'axios'

const URL = "http://localhost:3030/record"

export const fetchAllRecord = async ()=>{

    try{
        const response = await axios.get(URL);
        return  response.data;

    }catch(err){
        throw err;
    }
    
}

export const createRecord = async (recordData)=>{
    try{
        const response = await axios.post(URL, recordData);
        return response.data
    }catch(err){
        throw err;
    }
}

export const updateRecord = async (recordData, id)=>{
    try{
        const response = await axios.put(`${URL}/${id}`, recordData);
        return response.data
    }catch(err){
        throw err;
    }
}

export const deleteRecord = async (id)=>{
    try{
        const response = await axios.delete(`${URL}/${id}`);
        return response.data
    }catch(err){
        throw err;
    }
}

export const fetchOneRecord = async (id)=>{
    try{
        const response = await axios.get(`${URL}/${id}`);
        return response.data
    }catch(err){
        throw err;
    }
}