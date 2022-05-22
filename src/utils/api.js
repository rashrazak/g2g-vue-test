import axios from "axios";

    const apiClient = axios.create({
        baseURL: 'https://assets.g2g.com',
        withCredentials: false,
        headers:{
            'Accept': 'application/json',
            'Content-Type':'application/json'
        }
    })


    export default {
        getBrands(){
            return apiClient.get('/offer/keyword.json')
        }
    }