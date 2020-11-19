import qs from 'query-string'

export const getQuery = () => qs.parse(window.location.search)

export const makeQuery = (data: {}) => qs.stringify(data)