const initialState = {
  user: [],
  userRepos: [],
  userProfile: [],
  loading: false,
  error: ''
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_USERS':
      return {
        ...state,
        loading: true,
        error: ''
      }
    case 'LOADING_USER':
      return {
        ...state,
        loading: true,
        error: ''
      }
    case 'FETCH_USER':
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        error: ''
      }
    case 'FETCH_USER_REPOS':
      return {
        ...state,
        userRepos: action.payload.userRepos,
        loading: false,
        error: ''
      }
    case 'FETCH_USER_PROFILE':
      return {
        ...state,
        userProfile: action.payload.userProfile,
        loading: false,
        error: ''
      }
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: 'Something went wrong...'
      }
    default:
      return {
        ...state
      }
  }
}

export default searchReducer
