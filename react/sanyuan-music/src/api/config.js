import axios from 'axios';


export const baseURL = 'http://neteasecloudmusicapi.zhaoboy.com';//全局的后端API前缀
const axiosInstance =axios.create({
    baseURL:baseURL
})


export{axiosInstance}