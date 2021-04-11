import axios from "axios"


export const ApiAxios =async(id)=>{
    const url = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)

    return url
}