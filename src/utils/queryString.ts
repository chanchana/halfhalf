import qs from 'query-string'

export const getQuery = () => {
    console.log(window.location.hash.split('?')[1])
    return qs.parse(window.location.hash.split('?')[1])
} 

export const makeQuery = (data: {}) => qs.stringify(data)