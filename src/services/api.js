const baseUrl = 'https://api.github.com'

export const getUser = (userName = 'felipetodev') => `${baseUrl}/search/users?q=${userName}`
export const getUserRepos = (userName) => `${baseUrl}/users/${userName}/repos`
