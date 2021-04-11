import service from "../utils/request"

export function FindAllComment(id) {
    return service({
        url: '/comment/article/' + id,
        method: 'get',
    })
}

export function SaveComment(data) {
    return service({
        url: '/comment/',
        method: 'post',
        data: data
    })
}