import service from "../utils/request"

export function SaveVideo(data) {
    return service({
        url: '/video',
        method: 'post',
        data: data
    })
}

export function FindAllVideo() {
    return service({
        url: '/video',
        method: 'get'
    })
}