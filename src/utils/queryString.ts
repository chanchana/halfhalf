import qs from 'query-string'

export const getQueryString = () => window.location.hash.split('?')[1]

export const getQuery = () => qs.parse(getQueryString())

export const makeQuery = (data: {}) => qs.stringify(data)