import axios from "axios";

const url:string = process.env.REACT_APP_API_URL || "https://fakestoreapi.com";

export const ApiInstance = axios.create({
    baseURL:url,
    headers: {
        'Content-Type':'application/json',
    },
    // withCredentials:true,
})

