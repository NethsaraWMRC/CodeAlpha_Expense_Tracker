import axios from 'axios'

const URL = "http://localhost:3030/user"

export const fetchUser = async ()=>{
    try{
        const response = await axios.get(URL)
        return response.data

    }catch(err){
        throw err;
    }
}

export const updateUser = async (userData, id)=>{
    try{
        const response = await axios.put(`${URL}/${id}`, userData,{
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return response.data
    }catch(err){
        throw err;
    }
}

export const fetchOneUser = async (id)=>{
    try{
        const response = await axios.get(`${URL}/${id}`)
        return response.data

    }catch(err){
        throw err;
    }
}