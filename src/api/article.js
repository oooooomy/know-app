import service from "../utils/request"

export function FindAllType() {
    return service({
        url: '/article/type/all',
        method: 'get',
    })
}

export function SaveArticle(data) {
    return service({
        url: '/article',
        method: 'post',
        data: data
    })
}

export function FindAllArticle(type) {
    return service({
        url: '/article?type=' + type,
        method: 'get',
    })
}

export function FindArticleById(id) {
    return service({
        url: '/article/' + id,
        method: 'get',
    })
}

export function SearchArticle(value) {
    return service({
        url: '/article/search/' + value,
        method: 'get',
    })
}

export function Agree(id) {
    return service({
        url: '/article/agree/' + id,
        method: 'get',
    })
}