import service from "../utils/request"

export function UploadImage(file) {
    return service({
        url: '/user',
        method: 'post',
        data: data
    })
}