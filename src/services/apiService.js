import axios from "axios";

import {baseURL} from "../configs";

const apiService = axios.create({baseURL});

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDhhM2Y4ZjdjZjVkYzA4MWIxNWUwMWRlMmJlNmM1ZSIsInN1YiI6IjYzZjYzNzA5OWJjZDBmMDA4ZDJlMDk3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HEvYu1735JFVQwhsBZiYrVhzrcevkx7jzv-Dr0knmgA';


apiService.interceptors.request.use((config)=>{
    config.headers.Authorization= `Bearer ${token}`
    return config;
})

export {
    apiService
}