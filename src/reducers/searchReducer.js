const initialState = {
  user: [],
  userRepos: [],
  userProfile: []
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
    case 'FETCH_USER_PROFILE':
      return {
        ...state,
        userProfile: action.payload.userProfile
      }
    default:
      return {
        ...state
      }
  }
}

export default searchReducer
