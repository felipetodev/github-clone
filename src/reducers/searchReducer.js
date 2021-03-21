const initialState = {
  user: [],
  userRepos: []
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return {
        ...state,
        user: action.payload.user
      }
    case 'FETCH_USER_REPOS':
      return {
        ...state,
        userRepos: action.payload.userRepos
      }
    default:
      return {
        ...state
      }
  }
}

export default searchReducer
