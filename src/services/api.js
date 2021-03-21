const baseUrl = 'https://api.github.com'

export const getUser = (userName = 'felipetodev') => `${baseUrl}/users/${userName}`
