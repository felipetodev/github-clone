const baseUrl = 'https://api.github.com'

export const getUser = (userName = 'felipetodev') => `${baseUrl}/search/users?q=${userName}`
// export const getUsers = (key) => `${baseUrl}/search/users?q=${key}&page=1`
