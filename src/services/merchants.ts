const get = () => {
  return fetch('https://panjs.com/ywc18.json')
}

export const merchantService = {
  get,
}