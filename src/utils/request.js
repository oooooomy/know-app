import axios from "axios"
import {Toast} from "vant"

export const BASE_RUL = 'http://localhost:8080/api'

const request = axios.create({
    baseURL: BASE_RUL,
    timeout: 5000,
    headers: {
        "Token": localStorage.getItem("uid")
    }
})

request.interceptors.response.use(
    //正常响应
    response => {
        const res = response.data
        if (!res.status) Toast.fail(res.message)
        return res
    },

    //响应错误
    error => {

    }
)

export default request