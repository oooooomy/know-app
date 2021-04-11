import service from "../utils/request"

export function Login(data){
    return service({
        url: '/user/login',
        method: 'post',
        data: data
    })
}

export function SaveUser(data) {
    return service({
        url: '/user',
        method: 'post',
        data: data
    })
}