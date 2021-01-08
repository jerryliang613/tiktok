import axios from 'axios';

const http = axios.create({
    baseURL: ' https://tiktok-2021.herokuapp.com/'
})

export default http;